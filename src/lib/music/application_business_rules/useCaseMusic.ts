import { Request, Response } from 'express';
import { connect } from '../../data/database';
import {Music} from '../interface_adapters/iMusic'


export function indexMusic(req: Request, res: Response): Response {
    return res.json('Welcome to Music'); 
 }

 
export async function getPlayList(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const music = await conn.query('SELECT * FROM music');
        return res.json(music[0]);
    }
    catch (error) {
        res.status(404).json(error)
    }
}

export async function createCategory(req: Request, res: Response) {
    const newCategory: Music = req.body;
    const user_id = req.params.user_id
    const conn = await connect();
    await conn.query('INSERT INTO music SET ?', [newCategory,user_id])
    .then(()=>{ 
        if(user_id === null){
            conn.query('UPDATE music SET ? WHERE music.user_id', [user_id])
        }
        res.status(200).json({
            message: 'Category Created',
            user: user_id
        });

    })
    
}

