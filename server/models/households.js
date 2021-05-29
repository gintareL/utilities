const db = require('../database');

class Household{
static retrieveAll (callback) {
    db.query('SELECT id, name, description, count_of_housemates from households', function (err, res) {
        if (err.errors)
            return callback(err);
        callback(res);
    });
}

static retrieveById (id, callback) {
    db.query('SELECT id, name, description, count_of_housemates from households where id=$1', [id], function (err, res) {
        if (err.errors)
            return callback(err);
        callback(res);
    });
}

static insert (utilitiesType, callback) {
    db.query('INSERT INTO utilities_types (name, description, count_of_housemates) VALUES ($1, $2, $3)', [utilitiesType], function (err, res) {
        if (err.error)
            return callback(err);
        callback(res);    
    });
}

}

module.exports = Household;