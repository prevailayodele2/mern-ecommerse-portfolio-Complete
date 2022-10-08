import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
   return jwt.sign(
       {
          // id: user.id,
           firstname: user.firstname,
           lastname: user.lastname,
           address: user.address,
           email: user.email,
           phone: user.email,
           isAdmin: user.isAdmin,
       },
       process.env.JWT_SECRET
   )
} 