var pg = require('pg');

var DATABASE_URL = 'postgres://cgocavixzphxyc:7f4d866a006cd43983c945d8f70090fb3fc2e13351c4df3567d236f0ba0ed5af@ec2-54-83-48-188.compute-1.amazonaws.com:5432/df5vlfg2ldn3e';
var client = new pg.Client(DATABASE_URL);
client.connect();
pg.defaults.ssl = true;

// test model function will get from db
exports.checkIfUserExists = function(params, callback) {
    var query = "SELECT * FROM user_table WHERE email = lower('"+params.email+"') AND password = crypt('"+params.password+"', password);";
    console.log(params.email + ' ' + params.password);
    console.log(query);
    client.query(query, function(err, result) {
        callback(err, result);
    });
};