const express = require("express")
const router = express.Router()

const authController = require('../controllers/authController')

router.get('/auth', (req, res) => { res.sendFile( "auth.html", {root: '../app/views'}) })
router.post('/login', authController.login)
router.post('/signup', authController.signup)
router.get('/logout', authController.logout)

module.exports = router 