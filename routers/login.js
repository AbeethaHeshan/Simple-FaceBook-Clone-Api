const express = require('express');
const router = express.Router();
const User = require("../models/user.models.js")

router.use(express.json())


router.post('/',async (req,res) => {
    console.log(req.body.email);
    const er = await User.find({'email' : req.body.email , 'password' : req.body.password});
  
     try{
     if(req.body.email == er[0].email  &&  req.body.password == er[0].password){
               
                 res.json(er)

      }else{
                res.json("Not-Found")
      }
    }  
     catch(err){
          res.json(err)
     }

})




module.exports = router;
