module.exports = (app) => {

    var controller = {
        
        getAll: (req, res) => {
            app.config.connection.execute('SP_SelUsuarios', req.params, (err, recordset) => {
                if(err)
                    res.status(500).json({ "message": err});
                else
                    res.status(200).json(recordset[0]);
            });
        },

        getById: (req, res) => {
            app.config.connection.execute('SP_SelUsuariosId', req.params, (err, recordset) => {
                if(err)
                    res.status(500).json({ "message": err});
                else
                    res.status(200).json(recordset[0]);
            });
        },

        getByName: (req, res) => {
            app.config.connection.execute('SP_SelUsuariosNome', req.params, (err, recordset) => {
                if(err)
                    res.status(500).json({"message": err});
                else
                    res.status(200).json(recordset[0]);
            });
        }

    };

    return controller;
};