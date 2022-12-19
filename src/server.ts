import { app } from './app';
import { router } from './routes';

app.listen(3333, () => console.log('Server is running! 🚀'));
app.use(router);
