// require area 
const express = require('express');
const router = require('./src/routes/admin/adminRoute');
const app = express();
require('dotenv').config();
require('./src/config/db');
app.use(router);

// routing part 

app.post('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to server"
    })
})

// listning to server
let port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// Folder Structure
// 1- routes
// 2- src  (source file)
// 3- middlewares
// 4- models      // database schema
// 5- controllers                       (m^2c^2a)
// 6- config      // database connection
// 7- assets

// why do we make routes 
// 1- to make code more readable
// 2- to make code more maintainable
// when we work on any project we have to manage it according to roles defined in the project