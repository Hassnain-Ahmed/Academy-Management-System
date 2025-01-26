const express = require('express')

const cors = require("cors")
const dotenv = require('dotenv').config()

const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')

connectDb()
const app = express()
const port = process.env.PORT || 5000

// app.use(express.urlencoded({extended:true}))
// const userRoutes = require("./routes/users")

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/api/user", require("./routes/users"))
app.use("/api/auth", require("./routes/userLogin"))
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`Server at ${port}`)
})