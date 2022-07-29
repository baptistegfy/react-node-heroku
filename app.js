const express = require('express');
const path = require('path')
require('dotenv').config()

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json())
app.use(express.static('client/build'))

app.get('/api', (req,res) => {
  res.send({
    msg: `L'api te dis bonjour 👋`
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

