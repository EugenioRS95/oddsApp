import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const OPTIONS_LIMIT = process.env.OPTIONS_LIMIT;
export const SECRET = process.env.SECRET || 'secreto';