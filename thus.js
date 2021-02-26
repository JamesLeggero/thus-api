require('dotenv').config()
const axios = require('axios')

const ALPHA = process.env.ALPHAVANTAGE_API



const thus = {
    retrieveStockInfo: async stockName => {
        const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockName}&apikey=${ALPHA}`)
        const data = response.data
        const company = data.Name
        return `The company associated with ${stockName} is ${company}`
        
        // return 'through'
    }
}

module.exports = thus