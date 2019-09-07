const express = require('express')
const connectDB = require('./config/db')
const app = express()

app.get('/', (req, res) => res.send('API poop'))

//connect to MONGODB
connectDB()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))