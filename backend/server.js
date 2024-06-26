const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config()
const workoutsRoutes = require('./routes/workouts')

//express app
const app = express()

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, ()=> {
        console.log("Connected to DB & Server is running on PORT:", process.env.PORT)
        })
    })
    .catch((err) => console.log(err))

//middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
/* app.get("/", (req, res)=> {
    res.json({mssg: `Welcome to the Franklin's app`})
}) */

app.use('/api/workouts', workoutsRoutes)

