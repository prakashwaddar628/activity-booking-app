const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
};
