
const express = require('express')
const app = express()
const port = 3000
const places = require('./data/destinations')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');  
})

app.get('/bacheca', (req, res) => {
  res.json(places)

})

app.listen(port, () => {
  console.log('Sto ascoltando');  
})