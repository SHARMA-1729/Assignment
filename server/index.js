import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import employeeRoute from './routes/employeeRoute.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(routes);
app.use('/employee', employeeRoute); // Mounting the employeeRoute at /employee path

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default app;
