const characters = require('../API/routes/characters')

const routes = (server) => {
  server.use('/api/characters', characters)
}

module.exports = routes