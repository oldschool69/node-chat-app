const express = require('express');

const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');


var app = express();

app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

