const express = require("express");
const app = express();
//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendfile("public/kakaoMapAPI.html"); 
});


app.listen(8080, () => console.log("8080 Listen"));