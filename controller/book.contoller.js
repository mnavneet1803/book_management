const Book = require("../model/book")
const {validationResult}=require("express-validator")



exports.getAllBook = async(req,res)=>{
    if(req.query.title){
        const data = await Book.find({title:req.query.title,phone:req.phone})
        if(data.length>0){
            res.status(200).send(data)
        }
        else{
            res.status(403).send({error:`No Book Found with ${req.query.title}`})
        }
    }
    else if(req.query.author){
        const data = await Book.find({author:req.query.author,phone:req.phone})
        if(data.length>0){
            res.status(200).send(data)
        }
        else{
            res.status(403).send({error:`No Book Found with ${req.query.author}`})
        }
    }
    else if(req.query.genre){
        const data = await Book.find({genre:req.query.genre,phone:req.phone})
        if(data.length>0){
            res.status(200).send(data)
        }
        else{
            res.status(403).send({error:`No Book Found with ${req.query.genre}`})
        }
    }
    else{
        const data = await Book.find({phone:req.phone})
        if(data.length>0){
            res.status(200).send(data)
        }
        else{
            res.status(403).send({error:`No Book Found `})
        }
    }
}

exports.save = (req,res)=>{
    const errors = validationResult(req);
    if(errors.errors.length){
        res.status(403).send(errors)
    }
    else{
        try{
            req.body.phone=req.phone
            const obj = new Book(req.body)
            obj.save()
            res.status(200).send({message:"Data saved successfully"})
        }
        catch(er){
            res.status(400).send({error:"Something went wrong"})
        }
    }
}

exports.getById = async(req,res)=>{
    try{
        const data = await Book.find({_id:req.params.id})
  
            res.status(200).send(data)
    }
    catch(er){
        res.sendStatus(400)
    }
}


exports.update = async(req,res)=>{
    try{
        const data = await Book.find({_id:req.params.id})
        if(data[0].length === 0){
            res.status(403).send({error :"No Book Found with this ID"})
        }
        else{
            const d = await Book.findOneAndUpdate({_id:req.params.id},req.body)
            res.status(200).send({message:"Data updated saved"})
        }
    }
    catch(er){
        res.sendStatus(400)
    }
}


exports.delete =  async(req,res)=>{
    try{
        const data = await Book.find({_id:req.params.id})
        if(data[0].length === 0){
            res.status(403).send({error :"No Book Found with this ID"})
        }
        else{
            const d = await Book.findOneAndDelete({_id:req.params.id})
            res.status(200).send({message:"Book Successfully deleted"})
        }
    }
    catch(er){
        res.sendStatus(400)
    }
}