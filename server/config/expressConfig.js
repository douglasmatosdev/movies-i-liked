const express = require('express')
const cors = require('cors')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()
       
    app.use((req, res, next) => {
        res.header('Acces-Control-Allow-Origin', '*')
        app.use(cors())
        next()
    })

    
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign().include('controllers').into(app)

    return app
}
