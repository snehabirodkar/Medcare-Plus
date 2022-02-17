const jwt = require("jsonwebtoken");
const Patient = require("../model/patientSchema");

const authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await Patient.findOne({_id:verifyToken._id, "tokens.token": token });

        if(!rootUser) {
            throw new Error('User Not Found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch (error) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(error);
    }
}

// const authenticate = async (req, res, next) => {
//     const token = req.body.token || req.query.token || req.headers["x-access-token"];

// if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   next();
// }

module.exports =  authenticate;