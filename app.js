const express = require('express');
require('dotenv').config()

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json())

app.get('/api', (req,res) => {
  res.send({
    msg: `L'api te dis bonjour 👋`
  })
})

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

