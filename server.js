const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

// connect to MONGODB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(result =>
    console.log('Connected to MONGODB ATLAS')
  )
  .catch(error => console.log(`error: `, error));

  app.get("/", (req, res) => res.send("API poop"));

//INITIALLZE MIDDLEWARE
//replaces bodyparser because express comes with one already
app.use(express.json({ extended: false }));

//API ROUTES
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
