const express = require('express')
const path = require('path')

// instantiate express
const app = express()

// set path for public folder
const publicPath = path.join(__dirname, '..', 'client', 'public')

// set public folder
app.use(express.static(publicPath))

// set port for local and deployed
const port = process.env.PORT || 5000

// route for frontend traffic
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

// start server
app.listen(port, () => {
  console.log(`Server is up! You can see it live at http://localhost:${port}/`);
});