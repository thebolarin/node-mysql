const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecourse','root','lilbola19',{
    dialect : 'mysql',
    host: 'localhost',
    port: '3307'
});

module.exports = sequelize ;


/*const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodecourse',
    password: 'lilbola19',
    port: '3307'
});

module.exports = pool.promise();*/