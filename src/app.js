import express from "express";
import employeesRoutes from './routes/employeesRoutes.js';
import indexRoutes from './routes/indexRoutes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api',employeesRoutes);

app.use((req,res,next) => {
  res.status(404).json({
    message: 'Endpoint Not Found'
  });
  next();
})

export default app;