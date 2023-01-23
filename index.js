
const express = require("express");
const cors = require("cors");

const PORT = 4000;
const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.use("/api",require("./Routes/emp-routes"))
// set port, listen for requests


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});

