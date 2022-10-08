import jwt  from "jsonwebtoken";

export const verifyToken = (req,res,next) =>{
    const authHead = req.headers.token
    if(authHead) {
        const token = authHead.split(" ")[1];
      jwt.verify(token, process.env.JWT_KEY, (err, user) => {
          if(err) res.status(403).json('Token is not Valid')
          req.user = user
          next()
      })
    }else {
      return res.status(401).json('You are not authenticated')
    }
}

export const verifyTokenAndAuth = (req, res,next)=> {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
          next()
        }else{
            res.status(403).json('Nice Try Sucker!!')
        }
    })
}
export const verifyTokenAndAdmin = (req, res,next)=> {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
          next()
        }else{
            res.status(403).json('Nice Try Sucker!!')
        }
    })
}
