const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');

require('dotenv').config();

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

// Route for saving an file
app.post('/save', upload.single('file'), (req, res) => {
    // req.file is the 'file' file
    // req.body will hold the text fields, if there were any
    // res.send('File saved!');
    res.send((req.headers.origin+'/get/'+req.file.filename) || req);
});

// Route for getting an file
app.get('/get/:filename', (req, res) => {
    let filename = req.params.filename;
    console.log("getting ",filename);
    res.sendFile(path.join(__dirname, '/uploads/', filename));
});
app.get('/gui/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/', "upload.html"));
});

// Route for deleting an file
app.delete('/delete/:filename', (req, res) => {
    let filename = req.params.filename;
    fs.unlink(path.join(__dirname, '/uploads/', filename), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred while deleting the file.');
        }
        res.send('File deleted!');
    });
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port '+process.env.PORT);
});
