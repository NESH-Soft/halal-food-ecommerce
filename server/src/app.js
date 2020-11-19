import express from 'express';
import dotenv from 'dotenv';
import configureAllRoutes from './routes/index';
import { handleError } from './middlewares/index';
// import user from './routes/userRoutes';

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());
configureAllRoutes(app);

app.use(handleError);

export default app;
