const express = require("express")
const app = express()
const port = 3000

var http = require('http')
var fs = require("fs");
app.set('view engine', 'ejs')
app.use(express.static('public'))


var generator = require('generate-password');

function generate() {

    var password = generator.generate({
        length: 10,
        numbers: true
    });
    return password

}
console.log("Mon mot de passe = ", generate())


fs.readFile('hello.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());



});
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'louay.sayari21@gmail.com',
        pass: 'louay123456'
    }
});

var mailOptions = {
    from: 'louay.sayari21@gmail.com',
    to: 'oumayma.metoui@maraboutcorp.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});




























app.get("/hello_world", (req, res) => {
    res.send("wellcome ♥ ");
});




app.get("/", (req, res) => {
    res.send("'<h1>Hello Node!!!!</h1>")
});



//  404 
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
