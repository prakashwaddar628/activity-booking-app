const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB(); // Connect to MongoDB

const port = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});