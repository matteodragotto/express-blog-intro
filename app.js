
const express = require('express')
const app = express()
const port = 3000
const destinations = require('./data/destinations')


app.get('/', (req, res) => {
  res.send('Server del mio blog');  
})

app.get('/bacheca', (req, res) => {
  res.json(destinations)
})

app.listen(port, () => {
  console.log('Sto ascoltando');  
})