import { Request, Response } from 'express'

// DB
// import { connection } from '../../store/database';
import { db } from '../../data/dbMongo';
// import codeStatus from '../../util/codeStatus'

// Interfaces
import { User } from '../enterprise_business_rules/userSchema';

export async function loginUser(req: Request, res: Response): Promise<Response | void> {
    try {
        db();
        const {email, password} = req.body
        const user =  await User.findOne({email: email})
        if (user) {
            res.json('Ops EL usuario existe');
            res.redirect('/user/:id')
          } else {  
            const newUser = new User({
                name: req.body.name,
                email:req.body.email
            })
            newUser.password = await newUser.encryptPassword(password);
            const userSaved = await newUser.save();
       return res.json(userSaved[0]);
    }
    
}catch (error) {
    // res.send(errorMidleware('404', name. message, path))
    console.error('estoy pasando el error'+error)
    }
};


