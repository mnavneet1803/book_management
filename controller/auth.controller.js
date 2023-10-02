const User = require("../model/user")
const jwt = require("jsonwebtoken")
const {validationResult}=require("express-validator")

exports.signup = (req,res)=>{
    const errors = validationResult(req);
    try{
        if(errors.errors.length){
            res.status(400).send(errors)
        }
        else{
            const obj = new User(req.body)
        obj.save()
        res.status(200).send(
            {"status":true,
        "message":"data saved successfully"}
            )
        }
        
    }
    catch(er){
        res.sendStatus(400)
    }

}

exports.signin = async(req,res)=>{
    const errors = validationResult(req);
    try{
        if(errors.errors.length){
            res.status(400).send(errors)
        }else{
            const data = await User.find({phone: req.body.phone})
            if(data.length && data[0].password === req.body.password){
                const token = jwt.sign({phone: data[0].phone}, "mysecretkey")
                const response = {
                    phone:data[0].phone,
                    accessToken: token
                }
                res.status(200).send(response)
            }
            else{
                res.status(403).send({error:"wrong credentials!!!"})
            }
        }
       
    }
    catch(er){
        res.sendStatus(400)
    }
}