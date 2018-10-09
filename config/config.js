// DB link on clear db

//mysql://b31d1b8e96ef45:29723a89@us-cdbr-iron-east-01.cleardb.net/heroku_0e336fbeb2f3f59?reconnect=true

const mysql = require("mysql");


var con  = mysql.createPool({

  host     : 'us-cdbr-iron-east-01.cleardb.net',
  user     : 'b31d1b8e96ef45',
  password : '29723a89',
  database : 'heroku_0e336fbeb2f3f59'

});


module.exports = con