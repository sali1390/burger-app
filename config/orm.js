var connection = require('./connection.js');

module.exports = {
    selectAll: function(tableName, callback){
        connection.query('SELECT * FROM ' + tableName, callback);
    },
    insertOne: function(tableName, burgerName, callback){
        connection.query('INSERT INTO ' + tableName + ' (burger_name, devoured) VALUES (?, ?)', [burgerName, 0], callback)
    },
//    updateOne: function(tableName, id, devoured, callback){
//        connection.query('UPDATE burgers SET ? WHERE id = ?', [{devoured: devoured}, id])
//    }
};
