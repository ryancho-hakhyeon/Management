const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()
const workschedulesRouter = require('./router/workschedules')

app.use('/workschedules', workschedulesRouter)

app.use(cors())
app.use(bodyparser.json())
app.use(express.json())

// mongoose.connect('mongodb://localhost/workschedules', { useNewUrlParser: true })
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => {
    console.error(error)
})

db.once('open', (error) => {
    console.log('Database Connected...')
})

app.listen(3000, () => {
    console.log('Server Running...')
});
