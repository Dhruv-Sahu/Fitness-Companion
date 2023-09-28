require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const cors = require("cors")
const bodyParser = require("body-parser")


// express app
const app = express()

// middleware
app.use(express.json())

app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

// 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