module.exports = (app, registerUser, encryption, con) => {



	   app.post('/register', (req, res)=> {

	   	      const firstname = req.body.firstname

	   	      const lastname = req.body.lastname

	   	       const username = req.body.username

	   	       const password = req.body.password

	   	       const email = req.body.email;

	   	       registerUser(app, con, firstname, lastname, username, email, password, avatarUrl, (result)=> {
                       
                       console.log(result)
	   	       })
	   })
}