import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import cors from 'cors';

import  ProductController  from './controllers/product.controller';

dotenv.config();

createConnection({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    __dirname + '/entities/*.ts'
  ],
  synchronize: true,
  logging: false
})
  .then(() => {
    console.log('Connected to the database.');

    const app = express();
    const port = process.env.PORT || 3000;
    
    app.use(cors());
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/api', ProductController);

    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.log(error);
  });
    