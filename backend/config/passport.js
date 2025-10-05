import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/user.model.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      scope: ["profile", "email"], // What info we want from Google
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists with this googleId
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          return done(null, user); // User exists, log them in
        }

        // If not, check if user exists with this email
        user = await User.findOne({ email: profile.emails[0].value });

        if (user) {
          // User exists with email, but not linked to Google. Link them.
          user.googleId = profile.id;
          user.avatar = profile.photos[0].value;
          user.isVerified = true; // Google verifies emails
          await user.save();
          return done(null, user);
        }

        // If no user exists at all, create a new one
        const newUser = new User({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
          isVerified: true, // Google verifies emails automatically
        });

        await newUser.save();
        return done(null, newUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// These are needed for session management, though we use JWT
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});