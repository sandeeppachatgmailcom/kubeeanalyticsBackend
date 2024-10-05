const mongoose = require('mongoose');
const link = 'mongodb://127.0.0.1:27017/machinTask2?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1';
mongoose.connect(link)
.then(() => {
    console.log('MongoDB Connected');
})
.catch(err => {
    console.error('Connection error', err);
});
module.exports = mongoose;