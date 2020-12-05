import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import configureAllRoutes from './routes/index';
import { handleError } from './middlewares/index';
// import user from './routes/userRoutes';

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());
configureAllRoutes(app);

if (process.env.NODE_ENV === 'PRODUCTION') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.use(handleError);

export default app;
