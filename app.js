const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post("/hash", function(req, res){
    const s = req.body.data;
    const hash = crypto.createHash('sha256').update(s).digest('hex');
    res.json({ hash : hash });
})

app.listen(8787, function() {
    console.log("Server started on port 8787");
});