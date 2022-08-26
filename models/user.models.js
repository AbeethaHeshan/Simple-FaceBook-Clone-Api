const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        firstName : {
            type:String,
            required:true
        },
        sureName : {
            type:String,
            required:true
        },
        gender : {
            type:String,
            required:true
        },
        dateOfBirth : {
            type:Date,
            required:true
        },
        password : {
            type:String,
            required:true
        },
        phoneNumber : {
            type:String,
            required:true
        },
        email : {
            type:String,
            required:true
        }
})

module.exports = mongoose.model('user',userSchema);