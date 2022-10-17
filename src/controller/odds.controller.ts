import { Request, Response} from 'express';
import { validateOptionsList,getOption } from '../utils/validateBody';


export const getOptionByProbability = async (req: Request,res: Response) => {
    let list = req.body;
    try {
        list = validateOptionsList(list['options']);
        const option = getOption(list);
        res.status(201).json({option: option[0], list: list});
    } catch(err) {
        console.log(err);
        const errorMessage: string = (err as Error).message;        
        res.status(500).json({err: errorMessage});
    }
}
    
    