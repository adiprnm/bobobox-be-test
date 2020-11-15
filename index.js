require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/index')
const { handleError } = require('./lib/handler')

// register routes
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

// register error handler
app.use((err, req, res, next) => {
    handleError(err, res);
});

// register api not found handler
app.use((req, res, next) => {
    errorResponse(res, "API tidak ditemukan!", 404)
})

app.listen(port, () => {
    console.log(`Express Skeleton app listening at http://localhost:${port}`)
})