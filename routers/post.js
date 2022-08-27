const express = require('express');
const router = express.Router();
const Post = require("../models/post.models")
// router.use(express.json())


const bodyParser = require('body-parser');
router.use(bodyParser.json({limit: '12mb', extended: true}));


router.post('/create',async(req,res) => {
     const post = new Post({
        userId: req.body.userId,
        date: req.body.date,
        Title:req.body.Title,
        Body:req.body.Body 
     })

     try{
           const response = await post.save();
           res.json(response)
     }catch(err){
          res.json(err)
     }
})


router.get('/',async(req,res) => {
     try{
        const post = await Post.find();
        res.json(post)
     }catch(err){
           
     }
})


router.get('/:id',async(req,res) => {
     
     
      
      try{
         const post = await Post.findById(req.params.id)
         res.json(post)
      }catch(err){
           res.json(err)
      }
      


})

router.put('/update',async(res,req) => {

     const post = await Post.findById(req.params.id)
     post.userId = req.body.userId;
     post.date =  req.body.date;
     post.title = req.body.title;
     post.body = req.body.post;
     
     try{
         await post.save();
     }catch(err){
          res.json(err)
     }
     

})


router.delete('/delete',async(res,req) => {

         const post = await Post.findById(req.params.id);
         try{
            
         const respose =  await post.remove()  
          res.json(respose);
         }catch(err){
             res.json(err)
         }

})




module.exports = router;