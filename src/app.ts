import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

// eslint-disable-next-line
export function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());


  app.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' });
  });


  return app;
}
