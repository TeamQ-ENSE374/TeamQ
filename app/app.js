const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")

require("dotenv").config()

const app = express()
const port = 3000

require('./config/app')(app, express, session, passport)
require('./config/mongoose')(mongoose)
require('./config/passport')(passport)
app.get("/test", (req, res) => {
    res.render('./partials/popUpEventForm.ejs')
})
require('./config/routes')(app)

require('./config/listen')(app, port)

