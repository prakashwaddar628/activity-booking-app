const Booking = require('../models/Booking');

exports.bookActivity = async (req, res) => {
  const booking = new Booking({
    user: req.user,
    activity: req.params.activityId
  });
  await booking.save();
  res.status(201).json({ message: 'Activity booked' });
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user }).populate('activity');
  res.json(bookings);
};
