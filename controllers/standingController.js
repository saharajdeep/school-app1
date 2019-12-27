const express=require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const Standing=mongoose.model('Standing');
const methodOverride = require('method-override');
const router = express();

router.use(bodyParser.json());
router.use(methodOverride('_method'));

router.use(bodyParser.json());


router.get('/',(req,res)=>{
 
    res.render("standing/adminstanding",{
      viewTitle:"Add standings",
      
    });  
});

router.get('/finalStanding',(req,res)=>{
    Standing.find((err,docs)=>{
        if(!err){
            res.render("standing/finalStanding",{
              viewTitle:"See News",
              list:docs
            });
        }
        else{
            console.log('Error in retrieving employee list '+err);
        }
    });
  });

router.post('/',function(req, res) {
 
    console.log(req.body);
    var standing=new Standing();
    standing.champion=req.body.champion;
    standing.second=req.body.second;
    standing.third=req.body.third;
    standing.highestScore=req.body.highestScore;
    standing.bestPlayer=req.body.bestPlayer;
    standing.bestGoalkeeper=req.body.bestGoalkeeper;
    standing.save((err,doc)=>{
      if(!err)   res.render('admin/adminApprove',{
        standing:req.body
     });
     else
     console.log('Error during inserting to database::',err);
    });
  });

module.exports=router;