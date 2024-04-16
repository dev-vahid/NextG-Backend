var express    = require('express');
var bodyParser = require('body-parser');
var cors       = require('cors');


var app = express();
app.use(cors());
app.use(bodyParser.json({limit: '150mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: true}));

// Middleware to parse JSON requests
app.use(express.json());


var port = 3003;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});