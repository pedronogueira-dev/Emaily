const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user,done) => {
  done(null, user.id);

});

passport.deserializeUser((userId,done) => {
  User.findById(userId).then(existingUser => {
    done(null, existingUser);
  });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'auth/google/callback' ||keys.googleCallbackURL
    proxy: true
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if(existingUser){
          done(null, existingUser);
        }else{
          new User({ googleId: profile.id }).save()
            .then((newUser) => done(null,user));
        }
      });
    }
  )
);
