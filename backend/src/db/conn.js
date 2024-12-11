const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoApp')
.then(()=>{
    console.log('Connection Successful');
})
.catch((err)=>{
    console.log('No Connection');
    console.log(err);
})