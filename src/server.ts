import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.listen(8080, () => console.log('Server is running! 🚀'));
app.use(router);
