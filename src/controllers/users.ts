import express from 'express';
import { getUsers } from '../db/users';

export const getAllUsers =  async (req: express.Request, res: express.Response)=>{
    try { 
        const users = await getUsers();
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
        
    }
}
