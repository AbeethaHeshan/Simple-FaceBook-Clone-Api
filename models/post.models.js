const monoose = require('mongoose')

const postSchema = monoose.Schema({
           userId:{
               type:String,
               requred:true
           },
           
           date:{
            type:Date,
            requred:true
          },
  
          Title:{
            type:String,
            requred:true
          },
          Body: {
            // base64: String,
            // imageFormat: String
            type:String,
            requred:true
          }
})

module.exports = monoose.model('Createpost',postSchema);