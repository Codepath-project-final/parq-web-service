
const express = require("express");




let encryption = require("encryptionhelper");


let app = express();


let secretkey = "park"





// db config

const con = require("./config/config.js")




// services

const register = require("./services/registerUser.js");


// controllers

require("./controllers/register.js")(app, register, encryption, con)






