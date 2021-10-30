const express = require('express')
const { port } = require('./config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => res.redirect('/ping'))
app.get('/ping', (_req, res) => res.send('pong'))

app.listen(port, () => console.log(`I'm alive on http://localhost:${port}`))