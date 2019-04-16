const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(path.resolve(__dirname, 'pages/index.html'));
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

app.listen(port, () => console.log(`App is running on port ${port}`));