require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require ('cors')
const axios = require('axios')
const passport = require('passport')
// const passport = require('.config/passport')()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
// app.use(passport.initialize())

app.get('/', (req, res)=> {
    res.send('thus back')
})

app.listen(PORT, ()=>{
    console.log('scarem')
})