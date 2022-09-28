const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route.js");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");


app.use(cors());
app.use(express.json());
app.use(express.static("public"))
app.set("view engine", "ej");


dbConnect();
app.use('/api/v1/tools', toolsRoutes);


app.get("/", (req, res) => {
  // res.sendFile(__dirname + '/public/test.html') 
  res.render("home.ejs",{
    id:2
  })
});

app.all('*', (req, res) => {
  res.send('No route found');
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




