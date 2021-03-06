const express = require("express")
const router = express.Router()

const mainController = require('../controllers/mainController')

router.get("/", mainController.main)
router.get('/weekly', mainController.weekly)
router.get('/weekly2', mainController.weekly2)
router.post('/event' , mainController.event)
router.post('/addEvent', mainController.addEvent)
router.post('/updateEvent', mainController.updateEvent)
router.post('/deleteEvent', mainController.deleteEvent)
router.post('/inviteFriendsToEvent', mainController.inviteFriendsToEvent)

module.exports = router