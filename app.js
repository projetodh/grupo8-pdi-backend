
const express = require('express')
const app = express()
const port = 3200

app.get('/', (req, res) => {
  res.send('Testando URL, by Isaque')
})

app.get('/sobre', (req, res) => {
  res.send('Que somos')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/contato', (req, res) => {
  res.send("Nos encontrem em:" +
  "email:" +
  "numero:")
});
