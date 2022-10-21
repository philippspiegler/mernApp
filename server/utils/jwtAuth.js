import passport from "passport"

const jwtAuth = passport.authenticate("jwt", { session: false })
console.log("jwtAuth>>>>", jwtAuth)

export default jwtAuth
