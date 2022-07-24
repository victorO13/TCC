const express = require('express')
const routes = require('./routes')
require('dotenv').config()

const server = express()

server.use(express.json()) 
server.use(express.urlencoded({ extended: true }))
server.use(routes)

server.listen(process.env.PORT, function(){
    console.log('server is runnig in port: '+ process.env.PORT)
})