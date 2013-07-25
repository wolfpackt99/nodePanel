var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , Model = EpiManager.Model;

passport.serializeUser(function(user, done) {
  Model.User.findById(user._id, function(err, thisUser) {
    thisUser.lastLogin = new Date();
    thisUser.save(function(err, loginUser) {
      if (err) console.log(err);
      done(null, loginUser._id);
    });
  })
});

passport.deserializeUser(function(_id, done) {
  Model.User.findById(_id, function(err, user) {
    done(err, user);
  });
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    Model.User.findOne({ username: username, password: password, deleteAt: null }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect login.' });
      }
      return done(null, user);
    });
  }
));