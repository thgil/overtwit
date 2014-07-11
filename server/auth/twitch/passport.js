var passport = require('passport');
var TwitchtvStrategy = require('passport-twitchtv').Strategy;

exports.setup = function (User, config) {
  passport.use(new TwitchtvStrategy({
      clientID: config.twitch.clientID,
      clientSecret: config.twitch.clientSecret,
      callbackURL: config.twitch.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({
        'twitchtv._id': profile.id
      },
      function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          console.log(profile);
          console.log("DISPLAY_NAME:",profile.displayName);
          user = new User({
            name: profile.displayName,
            email: profile.email,
            role: 'user',
            username: profile.name,
            provider: 'twitchtv',
            twitchtv: profile._json
          });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      })
    }
  ));
};
