const axios = require('axios').default

const getCharacters = async (_req, res) => {

  const response = await axios.get(`https://rickandmortyapi.com/api/character`)

  res.status(200).json(response.data.results)

}

module.exports = {
  getCharacters
}