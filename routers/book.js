const express = require("express")
const controller = require("../controller/book.contoller")
const middleware = require("../middleware/verify_token")
const bookRouter = new express.Router()
const validation = require("../validation/users.validation")


//Get API
bookRouter.get("/book/get",middleware.verifyToken,controller.getAllBook )


//POST Method
bookRouter.post("/book/add" ,validation.uservalidation("save") ,middleware.verifyToken,controller.save )

bookRouter.get("/book/get/:id",controller.getById)

//PATCH API
bookRouter.patch("/book/edit/:id",controller.update )

//Delete Method
bookRouter.delete("/book/drop/:id",controller.delete)
module.exports = bookRouter ;