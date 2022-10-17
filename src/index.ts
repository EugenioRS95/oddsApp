import dotenv from "dotenv";
import {app} from './www/app';

dotenv.config();

app.listen(process.env.PORT, ()=>{
    console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
});
