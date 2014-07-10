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
        'twitchtv.id': profile.id
      },
      function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          user = new User({
            name: profile.name,
            email: profile.email,
            role: 'user',
            username: profile.display_name,
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
