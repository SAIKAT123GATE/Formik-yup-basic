const jwt = require( "jsonwebtoken");
 const generatetoken=(id)=>{
    var token=jwt.sign({id},process.env.SECRET_KEY,{
        expiresIn:"10s"
    });
    return token;
}