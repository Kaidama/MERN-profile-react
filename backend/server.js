const express = require("express");

const mongoose = require('mongoose')
require('dotenv').config()

const app = express();

app.get("/", (req, res) => res.send("API poop"));

// connect to MONGODB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then( result => console.log(`Connected to MONGODB ATLAS: `, result.connections)
)
.catch(error => console.log(`error: `, error)
)



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));


 
