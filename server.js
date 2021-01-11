const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 1212
const axios = require('axios')
const { response } = require('express')
const request = require('request')
const nodemailer = require('nodemailer')

const app = express()
app.use(bodyParser.json());
let transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "minh7cpht@gmail.com",
      pass: "senoritahtnl"
    }
  });
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
app.get("/vpsregger/", (req, res)=>{
    if (req.query.setting != undefined || req.query.expires != undefined){
        //some function
        var ip = "Tony"
        var pass = "Bosss"
        res.json({
            ip: ip,
            pass: pass
        })
    }
})

app.post("/sendvps", (req, res) => {
    var ip = req.body.ip
    var pass = req.body.pass
    console.log(ip + " " + pass)
    var content = ip + " " + pass
    var msg = {
        from: "Tony Parker <minh7cpht@gmail.com>",
        to: "urironspiderx@gmail.com",
        subject: " Testing mail",
        text: content
    }
    transporter.sendMail(msg, (err, info) => {
        if (err) {
            console.log(err);
        }
        else{
            console.log(info)
        }
    })
    res.send(200)
})

app.listen(port)
