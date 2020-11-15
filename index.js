const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()

const response = require('./src/lib/response')

// routes
const userRoute = require('./routes/user')

app.use('/user', userRoute)

app.get('/', (req, res) => {
    const result = response.success("Express Skeleton server is online!")
    res.json(result)
})

app.listen(port, () => {
    console.log(`Express Skeleton app listening at http://localhost:${port}`)
})