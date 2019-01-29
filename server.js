const express = require('express');
const fs = require('fs');
const app = express();
let stringifyFile = "";
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf-8', (err, data) => {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});

app.post('/updateNote/:note', (req, res) => {
    stringifyFile += req.params.note;
    fs.writeFile('./test.json', stringifyFile, (err) => {
        if (err) throw err;
        console.log('file updated');
    });
});

app.listen(3000);

