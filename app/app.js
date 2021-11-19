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

const authRoutes = require('./routes/authRoutes')
const altRoutes = require('./routes/altRoutes')
const mainRoutes = require('./routes/mainRoutes')
// ===============================================================================>

app.use(authRoutes)
app.use(mainRoutes)
app.use(altRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})