const axios = require('axios').default
const fs = require("fs").promises;
const json2csv = require('json2csv').parse

const getCharacters = async (req, res) => {
  const { query } = req;
  const { params } = req;

  console.log(params)
  let builtQuery = ''
  Object.entries(query).forEach(([key, value], index, arr) => builtQuery += `${key}=${value}${arr[index + 1] ? '&' : ''}`)

  const response = await axios.get(`https://rickandmortyapi.com/api/character/?${builtQuery}`)

  if (params.zip) {
    const date = new Date().getTime()
    await fs.writeFile(`./src/API/temp/${date}.csv`, json2csv(response.data.results, { delimiter: '|' }), { encoding: 'utf-8' })
    res.send(`./src/API/temp/${date}.csv`)
  }


  res.status(200).json(response.data.results)

}


module.exports = {
  getCharacters,
}