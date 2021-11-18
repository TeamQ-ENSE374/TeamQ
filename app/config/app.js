module.exports = function (app, express, session, passport) {
    app.use(express.urlencoded({
        extended: true
    }))

    app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    app.use(express.static("public"))

    app.set("view engine", "ejs")
}