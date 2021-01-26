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

app.use(compression());

const server = http.createServer(app);

// Obtiene la petición getItems y la redirecciona al API real, luego transforma la data, almacena el cache y responde al consumidor
app.use('/getItems', (req, res) => {

    //Consultamos la caché
    if (myCache.get(keyCache) == undefined) {
        console.log("Real Request to " + URI)
        //Request real al API
        let body = [];
        req.pipe(request[req.method.toLowerCase()](URI))
            .on('response', (res) => {
            }).on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                body = Buffer.concat(body).toString();
                let bodyFormatted = JSON.parse(body).map(i => {
                    return {
                        title: i.title,
                        imageUrl: i.imageUrl,
                        url: i.url
                    }
                });
                myCache.set(keyCache, bodyFormatted, 300); //300 seconds, 5 minutes
                res.send(JSON.stringify(bodyFormatted));
            })
    } else {
        console.log("Fake Request to caché...")
        //Respondemos con lo almacenado en caché
        res.send(JSON.stringify(myCache.get(keyCache)));
    }

});

// Web server - serves the Client-side
app.use('/', express.static(__dirname + '/dist'));

server.listen(port, null, null, () => console.log(`Web App listening on port ${port}!`));
