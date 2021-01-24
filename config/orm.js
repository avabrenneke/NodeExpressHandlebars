var connection = require("./connection.js");
var orm = {
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    //Insert Function
    insertOne: function (BBQ, California, AsianFusion, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [BBQ, California, AsianFusion], function (err, texMex) {
            if (err) throw err;
            callback(texMex);
        });
    },

    //Update Function
    updateOne: function (colVal, id, callback) {
        var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
        connection.query(queryString, [id], function (err, result) {

            if (err) throw err;

            callback(result);
        });
    },

     //Delete Function
     deleteOne: function(id, callback) {
        var queryString = "DELETE FROM burgers WHERE " + id + ";";
        connection.query(queryString, [id], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
}
//Exports ORM
module.exports = orm;