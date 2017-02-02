var orm = require('../config/orm.js');

module.exports = {
    selectAll: function(callback){
        orm.selectAll('burgers', callback);
    },
    insertOne: function(burgerName, callback){
        orm.insertOne('burgers', burgerName, callback); 
    }
}