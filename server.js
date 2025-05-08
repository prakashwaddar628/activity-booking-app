const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
    }).catch(err => {
    console.error('MongoDB connection error:', err);
})