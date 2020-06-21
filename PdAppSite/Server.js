var express = require('express');
var app = express();
var mysql = require('mysql2');
//Версия для хостинга Политехом
const jsonParser = express.json();

// function getMySQLConnection() {
// 	return mysql.createConnection({
// 	  host: "localhost",
//     user: "root",
//     database: "pdsite",
//     password: "VjSa1Der"
// 	});
// }

function getMySQLConnection() {
	return mysql.createConnection({
    host: "std-mysql",
    user: "std_755",
    database: "std_755",
    password: "VjSa1Der"
	});
}

// const connection = mysql.createConnection({
//   host: "std-mysql",
//   user: "std_755",
//   database: "std_755",
//   password: "VjSa1Der"
// });




// настройка CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
  });


app.get('/posts', function (req, res) {
    var connection = getMySQLConnection();
    connection.query("SELECT * FROM std_755.posts",(err,result)=>{
      res.send(result);
    });
    connection.end();
  });

  app.get('/pdProgress', function (req, res) {
    var connection = getMySQLConnection();
    connection.query("SELECT * FROM std_755.pdprogress",(err,result)=>{
      res.send(result);
    });
    connection.end();
  });

  app.get('/Login',function(req,res){
    var connection = getMySQLConnection();
    connection.query(`SELECT * FROM std_755.usersdata WHERE login= "`+ req.query.login +`" and password= "`+req.query.password+`"`,(err,result)=>{
      res.send(result);
    });
    connection.end();
  });

  app.post("/EditPost",function(req,res){
    var connection = getMySQLConnection();
    connection.query(`INSERT INTO std_755.posts (postedby,postdate,content) VALUES ("`+req.query.postedBy+`","`+req.query.date+`","`+req.query.postContent+`")`,(err,result)=>{
      res.send(result);
    });
    connection.end();
    //INSERT INTO `pdsite`.`posts` (`postedby`, `postdate`, `content`) VALUES ('Владимир Яранцев', '09.06.2020', 'Третий пост');
    
  });
  
  app.listen(3000, function () {
    var connection = getMySQLConnection();
    connection.connect(function(err){
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else{
        console.log("Подключение к серверу MySQL успешно установлено");
        connection.end();
      }
   });
    console.log('Слушаю на порту 3000');
  });