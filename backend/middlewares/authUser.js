import jwt from "jsonwebtoken"

//user authentication middleware
const authUser = async (req,res,next)=>{
  try {
    const {token} = req.headers
    if(!token)
    {
      return res.json({success:false,message:"NOT AUTHORIZED LOGIN AGAIN"})
    }
    const token_decode = jwt.verify(token,process.env.JWT_SECRET)
    
    req.body = req.body || {}; // ensures it's not undefined
  req.body.userId = token_decode.id;

    next();
  } 
  catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}

export default authUser