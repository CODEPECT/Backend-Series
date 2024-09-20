const mongoose = require('mongoose');
require('../models/dbModel');
// connecting to mongo db 
const db = mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect')
db.then((d)=>{
    console.log('Database connected');
}).catch((err)=>{
    console.log('Database connection failed');
});

