import mysql from "mysql2/promise"
import "dotenv/config"
const db= await mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:""
});
   
 

  
module.exports = db