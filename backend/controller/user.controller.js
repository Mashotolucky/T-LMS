const {addUserDb, addUserDetailsDb} = require('../db/userdb');

const addUser = async (Password) =>{
    try {
        if(!Password){return next(new Error('Password missing'));}
        const user = await addUserDb(Password);

        return user;
    } catch (error) {
        throw error;
    }
}

const addUserDetails = async (req, res, next) =>{
    try {
        if(!req.body){return next(new Error('Missing field(s)'));}
        const userID = await addUser(req.body.Password);
        console.log(userID);
        console.log("uSER ID",userID.userid);
       
        const UserDetail = await addUserDetailsDb(userID.userid, req.body);
        console.log("body: ",req.body);
        return res.status(200).send(UserDetail);
    } catch (error) {
        
    }
}

module.exports ={ addUserDetails } 