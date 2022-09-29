const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const usersRoute = require("./routes/v1/users.route.js");
const errorHandler = require("./middleware/errorHandler");


app.use(cors());
app.use(express.json());
app.use(express.static("public"))
app.set("view engine", "ej");


dbConnect();

app.use('/api/v1', usersRoute);


app.get("/", (req, res) => {
  res.render("home.ejs")
});

app.all('*', (req, res) => {
  res.send('No route found');
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




