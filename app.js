require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

//config json and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//db connection
require("./config/db.js");

//test router
app.get("/", (req, res) => {
  res.send("API working!");
});

//routes
const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
