const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, "public")))



app.use((req, res, next) => {
  res.sendFile('C:/Users/Admin/Desktop/Nodejs/node-mysql/public/index.html')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})