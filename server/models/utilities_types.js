const db = require('../database');

class UtilitiesTypes{
static retrieveAll (callback) {
    db.query('SELECT name from utilities_types', function (err, res) {
        if (err.errors)
            return callback(err);
        callback(res);
    });
}

static retrieveById(id, callback){
    db.query('SELECT name from utilities_types where id=$1', [id], function (err, res) {
        if (err.errors)
            return callback(err);
        callback(res);
    });
}

static insert (utilitiesType, callback) {
    db.query('INSERT INTO utilities_types (name) VALUES ($1)', [utilitiesType], function (err, res) {
        if (err.error)
            return callback(err);
        callback(res);    
    });
}

}

module.exports = UtilitiesTypes;