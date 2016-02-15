var App = require("../../build/app.server")

module.exports = function(app){

  app.get("*", function(req, res, next){
    App(req, res);
  })

}
