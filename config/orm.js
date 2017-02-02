var connection = require('./connection.js');

module.exports = {
    selectAll: function(tableName, callback){
        connection.query('SELECT * FROM ' + tableName, callback);
    },
    insertOne: function(tableName, burgerName, callback){
        connection.query('INSERT INTO ' + tableName + ' (burger_name, devoured) VALUES (?, ?)', [burgerName, 0], callback)
    },
    eatOne: function(tableName, id, callback){
        connection.query('UPDATE ' + tableName + ' SET devoured = 1 WHERE id = ?', id, callback)
    }
};
