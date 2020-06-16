var express = require('express');
var app = express();
var mysql = require('mysql2');
//Версия для хостинга сайтом 
const jsonParser = express.json();

// function getMySQLConnection() {
// 	return mysql.createConnection({
// 	  host: "localhost",
//     user: "root",
//     database: "pdsite",
//     password: "VjSa1Der"
// 	});
// }

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "pdsite",
  password: "VjSa1Der"
});




// настройка CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
  });


app.get('/posts', function (req, res) {
    connection.query("SELECT * FROM pdsite.posts",(err,result)=>{
      res.send(result);
    });
  });

  app.get('/pdProgress', function (req, res) {
    connection.query("SELECT * FROM pdsite.pdprogress",(err,result)=>{
      res.send(result);
    });
  });

  app.get('/Login',function(req,res){
    connection.query(`SELECT * FROM pdsite.usersdata WHERE login= "`+ req.query.login +`" and password= "`+req.query.password+`"`,(err,result)=>{
      res.send(result);
    });
  
  });

  app.post("/EditPost",function(req,res){
    connection.query(`INSERT INTO pdsite.posts (postedby,postdate,content) VALUES ("`+req.query.postedBy+`","`+req.query.date+`","`+req.query.postContent+`")`,(err,result)=>{
      res.send(result);
    });
    //INSERT INTO `pdsite`.`posts` (`postedby`, `postdate`, `content`) VALUES ('Владимир Яранцев', '09.06.2020', 'Третий пост');
    
  });
  
  app.listen(3000, function () {
    connection.connect(function(err){
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else{
        console.log("Подключение к серверу MySQL успешно установлено");
      }
   });
    console.log('Слушаю на порту 3000');
  });