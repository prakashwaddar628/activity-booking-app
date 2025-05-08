const express = require('express');
const auth = require('../middlewares/auth');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');

const router = express.Router();

router.post('/:activityId', auth, bookActivity);
router.get('/me', auth, getMyBookings);

module.exports = router;