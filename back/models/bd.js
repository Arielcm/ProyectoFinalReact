var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    /*
    host: process.env.MySQL_HOST,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_PASSWORD,
    database: process.env.MySQL_DB_NAME
      */   
    host: "localhost",
    user: "root",
    password: "",
    database: "proyectoreact",
    cloudinary:"//624326233244949:70OCNTY6Gk16MSW275uhDwqsRw8@drdty5uv9"
    
    
});

pool.query = util.promisify(pool.query);

module.exports = pool;
