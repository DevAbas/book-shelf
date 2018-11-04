const express = require('express');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true });

app.use(bodyParse.json());
app.use(cookieParser());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`The app is running on port ${port}`)
})