import express from 'express';
import dotenv from 'dotenv';
import configureAllRoutes from './routes/index';
// import user from './routes/userRoutes';

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());
configureAllRoutes(app);

export default app;
