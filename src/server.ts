import { app } from './app';
import { router } from './routes';

app.listen(8080, () => console.log('Server is running! 🚀'));
app.use(router);
