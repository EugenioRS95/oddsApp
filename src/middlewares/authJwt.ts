import jwt from "jsonwebtoken";
import { SECRET } from "../config";
import { Request, Response, NextFunction} from 'express'


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers["x-access-token"];

    if (!token) return res.status(500).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(String(token), SECRET);

        console.log("nombre: ", decoded);

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
}