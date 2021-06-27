import { iex } from '../config/iex.js'

export const stock  = {
    
    latestPrice: (ticker, callback) => {
        fetch(stock.latestPriceURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data))
        )
    },

    latestPriceURL: (ticker) => {
        return `${iex.iex_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
        console.log(data)
        const stockData = data[data.length - 1]
        const formatData = {}
        formatData.price = stockData.close
        formatData.date = stockData.date
        formatData.time = stockData.label
        return formatData
    },

    prevPrice: (ticker, date, callback) => {
        fetch(stock.getPrevClose(ticker, date))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPrevPriceData(data))
        )
    },

    getPrevClose: (ticker, date) => {
        return `${iex.iex_url}/stock/${ticker}/previous?chartLast=1&token=${iex.api_token}`
    },

    formatPrevPriceData: (data) => {
        console.log(data)
        const stockData = data
        const formatData = {}
        formatData.price = stockData.open
        formatData.date = stockData.date
        formatData.time = stockData.label
        return formatData
    },
}