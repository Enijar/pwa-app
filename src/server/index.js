const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const AppController = require('./Controllers/AppController');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));

app.get('*', AppController);

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
  });
