const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')))

// load the value in the server
const { API_URL } = process.env;

const corsOptions = {
  origin: API_URL,
  optionsSuccessStatus: 200 
}

app.get('/*', cors(corsOptions), function (req, res) {
  res.render(path.join(__dirname, 'build', 'index.html'), {API_URL})
})

// default Heroku PORT
app.listen(port, () => {
  console.log("Server has started on: " + port)
})