'use strict';

const http = require('http');
const fs = require('fs');
const debug = require('debug');

const log = debug('*');

const server = http.createServer(function (req, res) {
    log(req.method, req.url);
    const filename = req.url === '/' ? req.url + 'index.html' : req.url;

    fs.readFile(`public/${filename}`, (err, file) => {
        if (err) {
            log('Error: ', err);
            res.writeHead(404);
            res.write('Page not found: 404');
            res.end();
            return;
        }

        log('OK: ', filename);
        res.write(file);
        res.end();
    });
});

server.listen(3000);
console.log('Server is started!');