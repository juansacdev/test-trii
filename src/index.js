const express = require('express')
const morgan = require('morgan')
const { port } = require('./config')
const router = require('./routes')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router(app)

app.get('/', (_req, res) => res.redirect('/ping'))
app.get('/ping', (_req, res) => res.send('pong'))

app.listen(port, () => console.log(`I'm alive on http://localhost:${port}`))