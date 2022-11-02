const {pool} = require('../config/dbconfig');

const addUserDb = async (Password) =>{
    const User = await pool.query(
        `INSERT INTO Users(Password)
         VALUES($1)
         RETURNING * `,[Password]
    );

    return User.rows[0];
}

const addUserDetailsDb = async (userID, {FirstName, LastName, DateOfBirth, Province, Gender, Facilitator}) =>{
    const UserDetails = await pool.query(
        `INSERT INTO UserDetails(userID, FirstName, LastName, DateOfBirth, Province, Gender, Facilitator)
         VALUES($1, $2, $3, $4, $5, $6, $7)
         RETURNING * `,
         [userID, FirstName, LastName, DateOfBirth, Province, Gender, Facilitator]
    );

    return UserDetails.rows[0];
}

module.exports ={
    addUserDb, addUserDetailsDb
}

// FirstName: new FormControl('', [Validators.required]),
//       LastName: new FormControl('', [Validators.required]),
//       DateOfBirth: new FormControl('', [Validators.required, Validators.email]),
//       Province: new FormControl(''),
//       Gender: new FormControl(''),
//       Facilitator: new FormControl(''),