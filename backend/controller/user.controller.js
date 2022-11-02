const {addUserDb, addUserDetailsDb} = require('../db/userdb');

const addUser = async (req, res, next) =>{
    try {
        if(!req.body.Password){return next(new Error('Password missing'));}
        const Password = req.body.Password
        const user = await addUserDb(Password);

        return res.status(200).send(user);
    } catch (error) {
        next(error);
    }
}

const addUserDetails = async (req, res, next) =>{
    try {
        if(!req.body){return next(new Error('Missing field(s)'));}
        const userID = await addUser().userID;
        const UserDetail = await addUserDetailsDb(userID, req.body);
    } catch (error) {
        
    }
}