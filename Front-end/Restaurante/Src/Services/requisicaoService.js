const axios = require('axios')

const api = axios.create({
  baseURL: 'http://localhost:8812'
})

module.exports = api