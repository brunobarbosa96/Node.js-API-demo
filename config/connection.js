var sql = require('mssql'),
    config = {
            user: 'Admin',
            password: 'YourPassWord',
            server: 'YourServer',
            database: 'YourDataBase'
        };

module.exports = (app) => {

    var connection = {};

    connection.connect = (callback) => {
        sql.connect(config).then(() => {
            callback(null);
        }).catch((err) => {
            callback(err);
        });
    };

    connection.execute = (procedure, parameters, callback) => {
        connection.connect((err) => {
            if(err)
                callback(err, null);
            else {
                console.log(parameters)
                var request = new sql.Request();
                for (var key in parameters)
                    request.input(key, parameters[key])
                request.execute(procedure).then((resultset) => {
                    callback(null, resultset);
                }).catch((err) => {
                    callback(err, null);
                });        
            }
        });
    };

    return connection;
};
