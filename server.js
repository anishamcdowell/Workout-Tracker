const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./controller");
const connection = require("./config/connection.js");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

connection.on("connected", () => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
});
