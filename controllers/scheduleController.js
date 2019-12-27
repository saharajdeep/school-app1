const express=require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const Schedule=mongoose.model('Schedule');
const methodOverride = require('method-override');
const router = express();

router.use(bodyParser.json());
router.use(methodOverride('_method'));

router.use(bodyParser.json());


router.get('/',(req,res)=>{
 
    res.render("schedule/scheduleAll",{
      viewTitle:"Add standings",
      
    });  
});

// router.get('/finalStanding',(req,res)=>{
//     Standing.find((err,docs)=>{
//         if(!err){
//             res.render("standing/finalStanding",{
//               viewTitle:"See News",
//               list:docs
//             });
//         }
//         else{
//             console.log('Error in retrieving employee list '+err);
//         }
//     });
//   });

router.post('/',function(req, res) {
 
    console.log(req.body);
    var schedule=new Schedule();
    schedule.matchDay=req.body.matchDay;
    schedule.day=req.body.day;
    schedule.save((err,doc)=>{
      if(!err)   res.render('standing/adminstanding',{
        schedule:req.body
     });
     else
     console.log('Error during inserting to database::',err);
    });
  });

module.exports=router;