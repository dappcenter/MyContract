const express = require('express');
const impl = require("./impl");
const router = express.Router();

router.post('/dashboard', (req, res, next) => {
  //We'll just send back the user details and the token
  console.log(req.user.kycStatus);
  if(!req.user.kycStatus){
    res.render('userKYCPage', {user : req.user});
  }
  else{
    res.send("Yay");
  }

});

// router.post('/dashboard', (req, res,next) => 
// {

// });

module.exports = router;
