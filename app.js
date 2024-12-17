
const express = require('express')
const app = express()
const port = 3000
const posts = require('./data/destinations')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');  
})

app.get('/bacheca', (req, res) => {
  const myPosts = {
    postlist : posts,
    numberOfPosts : posts.length
  }
  res.json(myPosts)

})

app.listen(port, () => {
  console.log('Sto ascoltando');  
})