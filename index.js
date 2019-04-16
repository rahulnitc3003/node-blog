// const express = require('express');
// const path = require('path');

// const app = express();
// const port = 9000;

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     console.log(path.resolve(__dirname, 'pages/index.html'));
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/about.html'));
// });
// app.get('/contact', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
// });

// app.listen(port, () => console.log(`App is running on port ${port}`));



const express = require('express');
const path = require('path');
const expressEdge = require('express-edge');

const app = express();
const port = 9000;

app.use(express.static('public'));
app.use(expressEdge);

app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});



app.listen(port, () => console.log(`App is running on port ${port}`));