var connection = require('connection.js');

var orm = {
    selectAll: function(){
        connection.query('SELECT * FROM burgers', function(err, result){
            
        });
    },
    insertOne: function(){},
    updateOne: function(){}
};

module.export = orm;