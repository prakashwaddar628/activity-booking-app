const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

module.exports = app;