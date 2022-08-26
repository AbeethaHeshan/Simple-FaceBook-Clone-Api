const { response } = require("express");
const express = require("express");
const router = express.Router()
const User = require("../models/user.models.js")

router.use(express.json())


router.post('/save',async(req,response) => {
      console.log(req);
    const user = new User({
        firstName:req.body.firstName,
        sureName:req.body.sureName,
        gender:req.body.gender,
        dateOfBirth:req.body.dateOfBirth,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email

   })
     try{
         const responseData = await user.save();
         response.json(responseData)
     }catch(err){
         response.json(err)
     }
})


router.get('/',async(req,res)=>{
     try{
        const user = await User.find();
        res.json(user)
     }catch(err){
        response.json(err)
     }
})

router.get('/:id',async(req,res)=>{
    try{
       const user = await User.findById(req.params.id);
       res.json(user)
    }catch(err){
       response.json(err)
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)   
        const respose = await user.remove()
        res.send(respose)
        
     }catch(err){
          res.send('Err'+err)
     }
})


module.exports  = router ;