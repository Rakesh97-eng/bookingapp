import jwt from "jsonwebtoken";


export const verifytoken = (req,res,next)=>{
    let token = req.cookies.access_token;
    if(!token){next(res.send("Not verified"))}
    else {
        jwt.verify(token,process.env.JWTKEY,(err,user)=>{
            if(err) return next(res.send("Token issue"));
            req.user = user;
            next();
        })
    }
}

export const verifyuser = (req,res,next)=>{
    verifytoken(req,res,()=>{
        console.log(req.user);
        if(req.user.id === req.params.id){
            next()
        }
        else {
            next(res.send("Please Login"))
        }
    })
}

export const verifyadmin = (req,res,next)=>{
    verifytoken(req, res, () => {
        
        console.log(req.user);
        if(req.user.isAdmin){
            next()
        }
        else {
            next(res.send("Please Login"))
        }
    })
}

