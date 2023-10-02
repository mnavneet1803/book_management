const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express()
const path = require("path")
app.use(express.json())
app.use(cors())

const mongoose = require("mongoose")

dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jidqkjh.mongodb.net/`,{
    useNewUrlParser :true,
    useUnifiedTopology:true
})

const userRouter = require("./routers/user")
const bookRouter = require("./routers/book")

// setting up express server

app.use(userRouter)
app.use(bookRouter)
app.use(express.static(path.join(__dirname,"./frontend/build")))


app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./frontend/build/index.html"))
    console.log("Just got a request!")
    res.send('you are at home page ' )
})

app.listen(process.env.PORT || 8001,()=>{
    console.log("App is running on port 8001")
})
