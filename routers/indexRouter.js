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

router.get("/message/:id" , (req , res) => {
    const id = req.params.id;
    const message = messages[id];
    res.render("message" , {message})
})

module.exports = {router , messages};