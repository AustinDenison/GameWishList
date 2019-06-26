require('dotenv').config({path: __dirname + '/../.env'})
const express = require('express')
const {SERVER_PORT} = process.env
const gc = require('./Controllers/Games')

const app = express()

app.use(express.json())

// set api pathes here

app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
})