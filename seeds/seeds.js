const mongoose = require('mongoose');
const Activity = require('../models/Activity');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Activity.deleteMany(); // optional: clear existing
  await Activity.insertMany([
    {
      title: "Cricket Match",
      description: "Local cricket league",
      location: "Stadium A",
      datetime: new Date("2025-05-15T18:00:00Z"),
    },
    {
      title: "Movie Night",
      description: "Watch the latest release",
      location: "City Cinema",
      datetime: new Date("2025-05-17T20:00:00Z"),
    }
  ]);
  console.log("Activities seeded");
  process.exit();
});
