const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    phone : {
        type:Number,
        required:true,
    },
    title : {
        type:String,
        required:true,
    },
    author :{
        type: String,
        required : true
    },
    genre : {
        type: String,
    },
    publicationDate: {
        type: String
    }   
 })

 const Book = mongoose.model("Book", bookSchema)

 module.exports = Book ;