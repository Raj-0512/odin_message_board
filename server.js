const express = require("express");

const app = express();

const {router} = require("./routers/indexRouter");


app.set("view engine" , "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/" , router);

app.listen(3000, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log("Server running on port 3000");
    }
});