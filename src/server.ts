import { bootstrap } from './app';

const app = bootstrap();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
