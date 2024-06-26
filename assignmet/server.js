

const express = require('express')
const path = require('path')
const app = express()
const port = 3001


app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`The app listening on port ${port}`)
})