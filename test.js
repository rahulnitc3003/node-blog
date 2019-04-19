const mongoose = require('mongoose');
const Post = require('./database/models/Post');

mongoose.connect('mongodb://127.0.0.1:27017/node-js-test-blog');

Post.create({
    title : "My first blog post",
    description : "My first blog description",
    content : "first title content"
}, (error, post) => {
    console.log(error, post);
});