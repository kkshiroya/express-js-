const http = require("http");
const express = require("express");
const app = express();

const { connectDB } = require("./db/dbconaction");
const bodyparser = require("body-parser");

const routes = require("./routes");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/v1", routes);

connectDB();

http.createServer(app).listen(3001, () => {
    console.log("server started");
});
