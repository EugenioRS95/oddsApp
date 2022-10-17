import { SECRET } from "../config";
import jwt from 'jsonwebtoken';
import { Request, Response} from 'express'

export const getToken = async (req: Request,res: Response) => {
    try{
        const {name} = req.params;
        const token = jwt.sign({name},SECRET,{expiresIn: 60*2});

        return res.status(200).json({token});
    }catch(err) {
        res.status(500).json({err});
    }    
}

export const nameNotProvided = async (req: Request,res: Response) => {
    return res.status(500).json({message: 'Debe ingresar un parámetro con su nombre para poder obtener el token.'});
}