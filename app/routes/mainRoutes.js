const express = require("express")
const router = express.Router()

const mainController = require('../controllers/mainController')

router.get("/", mainController.main)
router.post('addEvent', mainController.addEvent)
router.post('/updateEvent', mainController.updateEvent)
router.post('/deleteEvent', mainController.deleteEvent)
router.post('/fetchEvents', mainController.fetchEvents)
router.post('/inviteFriendsToEvent', mainController.inviteFriendsToEvent)

module.exports = router