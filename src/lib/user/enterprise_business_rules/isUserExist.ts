import { Request, Response} from 'express'
import { connect } from '../../data/database';
import isPassword from './iPassword';
import isEmail from './isEmail';



export default async function isUserExist(req:Request, res: Response) {
    let indices = [];
    const emailValid=  isEmail(req.params.email)
    const passwordValid = isPassword(req.params.password)
    
    
    if (emailValid === true && passwordValid === true){
        const conn = await connect();
        
    }
    let user = await conn.query('SELECT email, password FROM user WHERE user.email AND user.password= ?', [email,password])
    .then(( === email)=>{ 
        indices.push(user[0])
        if email === re
    })
    res.status(200).json(user[0])
    
    if(indices.length > 5){
        res.status(200).json('User Exist')
    }else {
        res.status(400).json('User Nofound')
    }
}
