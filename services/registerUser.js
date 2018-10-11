

module.exports = (app, con, firstname, lastname, username, email, password, avatarUrl, callback) => {

 
  con.getConnection(function(err) {

  if(err){
  	console.log("error connecting: " + err)
  }
  else {
  	console.log('connection successful')
  }

})


con.query("INSERT INTO `users` (`username`, `email`, `passoword`, `avatar`) VALUES ('"+username+ "','" +email + "','"+ password + "','" +avatarUrl  + "')", function (err, result, fields){
       
      
      

            if(err) {

        console.log(err)
      }

        else { 
             
               callback(result)
        }


 })




}