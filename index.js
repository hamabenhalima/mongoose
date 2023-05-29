const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require ("mongoose")
dotenv.config()
app.use(express.json())
app.use("/api",require("./routes/contactRoutes"))

const port= process.env.PORT || 8081
mongoose.connect(process.env.MONGO_URI).then(() => console.log("database connected"))



app.listen(port,()=>console.log('listening in port:',port))