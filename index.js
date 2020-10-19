const express = require('express')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 5000

// Create express instance
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))

// for define routes apps
require('./api/routes')(app)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token, X-Socket-Id')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

// Export express app
// module.exports = app

// Start standalone server if directly running
const port = PORT
app.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})
