const mysql = require('mysql-promise');
const {DBconfig} = require('../config/DB');
//const connection = mysql.createConnection(DBconfig);
const connection = mysql();

connection.configure(DBconfig);


/* connection.connect((err) => {
    if (err) {
        console.error(`error connecting ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
    
});
*/
module.exports = {
    connection
} 