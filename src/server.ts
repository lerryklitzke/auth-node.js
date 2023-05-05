import App from './app';
import { AppDataSource } from './utils/data-source';

AppDataSource.initialize()
  .then(async () => {
    console.log('Connected to database.');
    App.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}...`));
  })