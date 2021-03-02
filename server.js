require('dotenv').config()
const express = require('express')
const app = express()
const { Pool, Client } = require('pg')
const pg = require('pg')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser'); 
const path = require('path')
const cors = require ('cors')
const axios = require('axios')
const passport = require('passport')
// const passport = require('.config/passport')()
const thus = require('./thus')

const User = require('./models/user')

const PORT = process.env.PORT || 3001
const { PG_POOL_DB, PG_POOL_PW, PG_POOL_USER, PG_URI } = process.env

// const pool = new Pool({
//     user: PG_POOL_USER, 
//     host: 'localhost', 
//     database: PG_POOL_DB, 
//     password: PG_POOL_PW, 
//     dialect: 'postgres', 
//     port: 5432
// })

// pool.connect((err, client, release) => {
//     if (err) {
//         return console.error('Error acquiring client', err.stack)
//     }
//     client.query('SELECT NOW()', (err, result) => {
//         release()
//         if (err) {
//             return console.error('Error executing query', err.stack)
//         }
//         console.log('connected to ' + PG_POOL_DB)
//     })
// })

// const client = new pg.Client(PG_URI)

// client.connect(()=> {
//     console.log(`connected to ${PG_POOL_DB}`)
// })

const sequelize = new Sequelize(PG_URI, {
    pool: {
        max: 5,
        min: 0, 
        acquire: 30000,
        idle: 10000
    }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use(cors())
app.use(express.json())
// app.use(passport.initialize())
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=> {
    res.send('thus back')
})

app.get('/users', async (req, res) => {
    const users = await User.findAll({
        attributes: ['user_id', 'username', 'email']
    })
    res.send(users)
    // console.log(JSON.stringify(users, null, 2))
})

app.post('/', async (req, res) => {
    const transformedStock = await thus.retrieveStockInfo(req.body.stockName)
    res.json(transformedStock)
})

app.listen(PORT, ()=>{
    console.log('scarem')
})