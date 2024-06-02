import express from 'express';
import mongoose from 'mongoose'
import carRoutes from './routes/cars.js'
import dotenv from 'dotenv'








const app = express();
dotenv.config();


//Middlewares
app.use(express.json());
app.use('/cars', carRoutes)

mongoose.connect(process.env.DATABASE).then(() => console.log('Connected to Database'))



app.listen(5000, () => console.log('server started'))