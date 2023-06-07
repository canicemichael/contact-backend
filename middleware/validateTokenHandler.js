// for all current users trying to access a private route
// we will check their tokens to find out if the tokens
// they provided is legit token
// This is why we are writing ths validateToken function

// so the tokens are usually in the headers(as key value pair - Authorization: Bearer vevegvg5362762536276) 
// or in Auth Option, in Bearer (teyetey63562ghs)

const asyncHandler  = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization 
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err){
                res.status(401);
                throw new Error("User is not authorized")
            }
            // from the decoded info, i will extract the user details
            req.user = decoded.user;
            next();
        });

        if (!token){
            res.status(401);
            throw new Error("User is not authorized")
        }
    }
})

module.exports = validateToken;