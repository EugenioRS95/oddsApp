import  express,{Express}  from "express";
import morgan from 'morgan';
import oddsRoutes from '../routes/oods.routes';
import authRoutes from '../routes/auth.routes';
import {PORT} from '../config';



const app:Express = express();

//Settings
app.set('port', PORT || 3000);
app.set("json spaces", 4);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/odds", oddsRoutes);
app.use("/api/auth", authRoutes);

export {
    app
}