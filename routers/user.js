const express = require("express")
const userRouter = new express.Router()
const controller = require("../controller/auth.controller")
const validation = require("../validation/users.validation")

userRouter.post("/user/signup",validation.uservalidation("signup"),controller.signup)

userRouter.post("/user/signin",validation.uservalidation("signin"),controller.signin)

// function vailidate(req){
//     if(req.body.phone.length==0 && req.body.password.length==0){
//       return  res.status(400).send({
//             type:"both",
//             error:"This Field Is Required"})
//     }
//     if(req.body.phone.length==0){
//         return  res.status(400).send({
//             type:"phone",
//             error:"This Field Is Required"})
//     }
//     if(req.body.password.length==0){
//         return res.status(400).send({
//             type:"password",
//             error:"This Field Is Required"})
//     }
//     if(req.body.phone.length>0&&req.body.phone.length<10){
//         return  res.status(400).send({
//             type:"phone",
//             error:"Mobile Number Should be 10 in length"})
//     }
//     if(req.body.password.length>0&&req.body.password.length<6){
//         return  res.status(400).send({
//             type:"phone",
//             error:"Mobile Number Should be 10 in length"})
//     }
// }
module.exports = userRouter ;