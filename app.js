
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


function createTable (con, callback){


     con.query("CREATE TABLE `user` (`username` VARCHAR(255), `email` VARCHAR(255), `password` VARCHAR(255), `avatarUrl` VARCHAR(255), `FirstName` VARCHAR(255), `LastName` VARCHAR(255))", function (err, result, fields){
       
      

            if(err) {

        console.log(err)
      }

        else { 
             
               callback(result)
        }


 })
} 

app.get('/create', (req, res)=> {

	  createTable(con, result => {
           
           res.send(result)
	  })
})



app.listen(process.env.PORT || 4000, ()=> {

	console.log("Server Running ....")

})