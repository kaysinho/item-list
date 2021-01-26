const express = require('express');
const http = require('http');
const request = require('request');
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const keyCache = "items";
const app = express();

const port = process.env.PORT || 8080;
const URI = 'https://test.spaceflightnewsapi.net/api/v2/articles?_limit=100';

const compression = require('compression');
app.enable('trust proxy');


app.use(function (req, res, next) {
    if (req.headers.host == 'localhost:8080') {
        //Si es localhost
        next();
    } else {
        if (req.secure) {
            // request via https
            next();
        } else {
            // request was via http, hacemos el redirect a https
            res.redirect('https://' + req.headers.host + req.url);
        }
    }

});

app.use(compression());

const server = http.createServer(app);

// Reverse proxy, pipes the requests to/from MobileFirst Server
app.use('/getItems', function (req, res) {

    //Consultamos la caché
    if (myCache.get(keyCache) == undefined) {
        console.log("Real Request to " + URI)
        //Request real al API
        let body = [];
        req.pipe(request[req.method.toLowerCase()](URI))
            .on('response', function (res) {
            }).on('data', function (chunk) {
                body.push(chunk);
            }).on('end', function () {
                body = Buffer.concat(body).toString();
                myCache.set(keyCache, JSON.parse(body), 300); //300 seconds, 5 minutes
            }).pipe(res)
    } else {
        console.log("Fake Request to caché...")
        //Respondemos con lo almacenado en caché
        res.send(JSON.stringify(myCache.get(keyCache)));
    }

});

// Web server - serves the Client-side
app.use('/', express.static(__dirname + '/dist'));

server.listen(port, null, null, () => console.log(`Web App listening on port ${port}!`));
