const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const users = require("./routes/users")

app.use(bodyParser.json)                                   //imports bodyParser 

app.get('/', (req, res) => res.send('default route'))
app.use(users)
app.listen(port, () => {
  console.log('app is listening on:', port)
})


