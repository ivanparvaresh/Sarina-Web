var sarinaexpress = require("sarina.express");
var path=require("path");

module.exports = function (sarina) {

    sarina.factory("sarina.web",["sarina.express.app"],function(app){
        return app;
    })

    // Web Server Configuration
    sarina.factory("sarina.web.config", ["options"], function (options) {
        var _config = options.web;
        return {
            set: function (config) {
                _config = config;
            },
            get: function () {
                if (_config == null) {
                    _config = options.web;
                }
                return _config;
            }
        }
    });

    sarina.config("sarina.web-config", [
        "sarina.express",
        "sarina.express.app",
        "sarina.web.config"], function (express,app, config) {

            var cf=config.get();

            app.set('view engine', 'vash');
            app.use(express.static(cf.webroot));
            app.set("views", cf.webroot + "/views");
            app.use(function (err, req, res, next) {
                console.log("An error occured ",err);
                res.status(500).send("Something broke!");
            })
        });

    // WEB SERVER
    sarina.factory("sarina.web.server", [
        "sarina.web.config",
        "sarina.express.server"], function (config, server) {
            return {
                start: function () {
                    return new Promise(function (resolve, reject) {
                        var cf = config.get();
                        server.start(cf.port).then(resolve).catch(reject);
                    });
                }
            }
        });

}