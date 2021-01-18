import express from 'express';
var {User} = require('../models/userModel');
var router = express.Router();


router.post('/',(req,res)=>{
    var newuser = new User({
        email : req.body.email,
        password : req.body.password,
        
    });
    newuser.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Customer saving Data : '+JSON.stringify(err,undefined,2));}

    });
});





router.get('/',(req,res)=>{
    console.log("FInish")
    req.find((err,docs)=>{
        if(!err){
            console.log("FInish")
            req.send(docs);
            console.log("FInish")
        }
        else{ console.log('Errore in Retriving Customer: ');}

    });

});
export default router;