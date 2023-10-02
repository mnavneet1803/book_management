const jwt = require("jsonwebtoken")

const verifyToken = async (req,res,next)=>{

    let token = req.headers['token']
    
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        })
    }
    jwt.verify(token, "mysecretkey",
        (err, decoded) => {
            if (err) {
                console.log(err)
                return res.status(401).send({
                    message: "Unauthorized!"
                })
            }
          else{
            req.phone = decoded.phone
            next()
          }
        })
}

module.exports = {
    verifyToken:verifyToken
}   