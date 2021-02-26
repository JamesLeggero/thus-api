require('dotenv').config()
const axios = require('axios')

const ALPHA = process.env.ALPHAVANTAGE_API



const thus = {
    retrieveStockInfo: stockName => {
        return stockName + ' through thus'
        // return 'through'
    }
}

module.exports = thus