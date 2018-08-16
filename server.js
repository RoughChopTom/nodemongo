const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');
const config_data = require('./config/config.development');

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(config_data.mongodb_context).catch(reason => console.log(reason));
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', routes.router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
