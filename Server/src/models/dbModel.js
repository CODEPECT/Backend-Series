const mongoose=require('mongoose');


const customers=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
});

const customerModel=mongoose.model('customers',customers);
const customerone = new customerModel({
    name:'Mahadev',
    email:'mahadev@gmail.com'
})

customerone.save().then((d)=>{
    console.log('Data saved');
}).catch((err)=>{
     console.log('Data not saved');
});

module.exports = customerModel;