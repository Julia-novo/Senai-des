const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"gerenciamento_projeto"
});



module.exports = connection;
