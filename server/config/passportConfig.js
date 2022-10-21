import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import * as dotenv from "dotenv"
import userModel from "../models/usersModel.js"
import passport from "passport"
dotenv.config()

const jwtOptions = {
  //extracting token from frontend req header
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
}

const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, done) {
  console.log("jwtstrategy")
  userModel.findOne({ _id: jwt_payload.sub }, function (err, user) {
    if (err) {
      console.log("error finding user")
      return done(err, false)
    }
    if (user) {
      console.log("user in jwtStrategy :>> ", user)
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
})

const passportConfig = () => {
  passport.use(jwtStrategy)
}

export default passportConfig
