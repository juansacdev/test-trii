const axios = require('axios').default

const getCharacters = async (req, res) => {
  const { query } = req;

  let builtQuery = ''
  Object.entries(query).forEach(([key, value], index, arr) => builtQuery += `${key}=${value}${arr[index + 1] ? '&' : ''}`)

  const response = await axios.get(`https://rickandmortyapi.com/api/character/?${builtQuery}`)

  res.status(200).json(response.data.results)

}

module.exports = {
  getCharacters
}