let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let passport = require('passport');
require('./models/users');
require('./models/user-calculations');
require('./config/passport');
let routes = require('./routes');
let configData = require('./config/config.development');
let app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(configData.mongodbContext, {useNewUrlParser: true}, () => {}).catch(reason => console.log(reason));
mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});
app.use(passport.initialize({}));
app.use('/', routes.router);
app.use(function (err, req, res) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});
app.listen(configData.expressPort, () => console.log(`Express server running on port ` + configData.expressPort));
