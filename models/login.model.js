const { default: mongoose } = require('mongoose');
const monoose = require('mongoose');

const login = new mongoose.Schema({
      userName: {
        type:String,
        reqred: true
     },
       password : {
        type:String,
        reqred: true
     }

})



module.exports = mongoose.model('login',login);


