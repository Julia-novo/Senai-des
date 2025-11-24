const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"agenda_de_contatos"

});



module.exports = connection;
