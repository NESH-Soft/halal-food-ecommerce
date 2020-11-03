import app from './app';
import connectDB from './mongoDB';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  // eslint-disable-next-line
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
