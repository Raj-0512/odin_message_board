const messages = [
    {
        text: "Hi there!",
        user: "Alex",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const express = require("express");

const router = express.Router();

router.get("/" , (req , res) => {

    res.render("index" , {title: "Message Board" ,messages});

});

router.get("/new" , (req , res) => {
    res.render("form");
})

router.post("/new" , (req , res) => {
    let body = req.body;
    const message = body.message;
    const name = body.name;
    messages.push({ text: message, user: name, added: new Date() });
    res.redirect("/");
})

module.exports = {router , messages};