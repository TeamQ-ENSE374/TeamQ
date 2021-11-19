const authRoutes = require('../routes/authRoutes')
const mainRoutes = require('../routes/mainRoutes')
const altRoutes = require('../routes/altRoutes')

module.exports = function (app) {
    app.use(authRoutes) //MVC
    app.use(mainRoutes) //MVVM
    app.use(altRoutes) //Err:404
}