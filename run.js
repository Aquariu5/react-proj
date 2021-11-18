const express = require("express");
const mongoose = require('mongoose');
const Post = require('./Post');
const app = express()
const port = 5000;

const DB_URL = "mongodb+srv://user:user@cluster0.jd0fi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const start = async () => {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(5000, () => console.log(`Работает на порте ${port}`));
    }
    catch(e) {
        console.log(e.message);
    }
}


app.use(express.json());

app.get('/all', async (req, res) => {

})

app.post('/create', async (req, res) => {
    const {author, title, content, picture} = req.body;
    const post = await Post.create({author, title, content, picture});
    res.json(post);
});

start();
