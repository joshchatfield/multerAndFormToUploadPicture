const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads' });

const port = 3030;

app.post('/mypost', upload.single('photo'), (req, res) => {
    console.log('file');
    console.dir(req.file);
    res.sendFile(__dirname + '/index.html');
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log('running on port: '+port)
})