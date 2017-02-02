var orm = require('../config/orm.js');

module.exports = {
    selectAll: function(callback){
        orm.selectAll('burgers', callback);
    },
    insertOne: function(burgerName, callback){
        orm.insertOne('burgers', burgerName, callback); 
    },
    eatOne: function(id, callback){
        orm.eatOne('burgers', id, callback)
    },
    throwUpOne: function(id, callback){
        orm.throwUpOne('burgers', id, callback)
    }
}