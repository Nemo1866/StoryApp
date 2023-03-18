const { compare } = require("bcrypt");
const localStrategy = require("passport-local");
const { User } = require("../database/connection");

module.exports.initializePassport = (passport) => {
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ where: { email } });

          if (!user) return done("Email Address Does not Exist", false);

          const hashPassword = await compare(password, user.password);

          if (!hashPassword) return done("Password Does not Match", false);

          return done(null, user);
        } catch (error) {
         
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser(async (email, done) => {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) return done(null, false);

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  });
};
