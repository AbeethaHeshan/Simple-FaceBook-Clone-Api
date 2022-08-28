const express = require('express');
const router = express.Router();
const User = require("../models/user.models.js")

router.use(express.json())


router.post('/',async (req,res) => {
    console.log(req.body.email);
    
     try{
          const er = await User.find({'email' : req.body.email , 'password' : req.body.password});
          console.log(er[0].email +  "  " + er[0].password);
     if(req.body.email == er[0].email  &&  req.body.password == er[0].password){
                  console.log("ssd");
                 res.send({message:"Success", data:er ,status:200 })

      }else{
                console.log("saasd");
                res.send("Not-Found")
      }
    }  
     catch(err){
          res.send(err)
     }

})




module.exports = router;
