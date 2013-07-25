module.exports = function(app) {
  var routing = this;

  app.get('/', function (req, res) {
    return res.render('app/temple');
  });

  app.get('/app', function (req, res) {
    return res.render('app/temple');
  });

  app.get('/app/directives/navigation', function (req, res) {
    return res.render("app/directives/navigation");
  });

  app.get('/app/directives/switcher', function(req,res){
    return res.render('app/directives/switcher');
  });

  app.all('/app/*', function(req, res, next) {
   if (req.xhr) {
      next();
    }
    else {
      res.render('app/temple');
    }
  });

  app.get('/app/:directory/:view', function(req, res) {
    res.render("app/"+req.params.directory+"/"+req.params.view);
  });

  return routing;
};