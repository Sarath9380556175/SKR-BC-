const signups=require('../models/signup')

exports.getsignup=(req,res)=>{
    signups.find()
    .then(response=>res.status(200).json({message:'signup details got successfully', signupdetails:response}))
    .catch(err=>res.status(500).json({err}));
  };