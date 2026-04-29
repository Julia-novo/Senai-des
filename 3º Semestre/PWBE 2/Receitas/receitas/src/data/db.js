const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "cosmics",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error(" Erro ao conectar no MySQL:");
    console.error(err.message);
    return;
  }

  console.log("✅ Conectado ao MySQL!");
});

module.exports = db;