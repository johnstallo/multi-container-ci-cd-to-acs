var os = require('os');
var request = require('request');
var morgan = require('morgan');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(morgan("dev"));

// application -------------------------------------------------------------
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// api ------------------------------------------------------------
app.get('/api', function (req, res) {
    // // Connect to redis container
    // var redis = require('redis').createClient("redis://mycache");

    // // Increment requestCount each time API is called
    // redis.incr('requestCount', function (err, reply) {
    //     var requestCount = reply;
    // });

    // Invoke service-b
    request('http://service-b', function (error, response, body) {
        res.send('Hello from service A running on ' + os.hostname() + ' and ' + body);
    });
});

// app.get('/metrics', function (req, res) {
// var redis = require('redis').createClient("redis://mycache");
//     redis.get('requestCount', function (err, reply) {
//         res.send({ requestCount: reply });
//     });
// });

var port = 80;
var server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});

process.on("SIGINT", () => {
    process.exit(130 /* 128 + SIGINT */);
});

process.on("SIGTERM", () => {
    console.log("Terminating...");
    server.close();
});
