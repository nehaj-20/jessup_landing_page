const http = require('http');
const fs = require('fs');



const server = http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/jessup") {
        fs.readFile('jessup.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/william') {
        fs.readFile('william.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });

    } else if (request.url === '/william/new') {
        fs.readFile('william.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });

    } else if (request.url === '/img/1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/1.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/logo2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/logo2.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/logo.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/logo.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/bestcollage.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/bestcollage.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/2.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/a1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/a1.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/collage1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/collage1.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/event1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/event1.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/event2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/event2.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/event5.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/event5.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })


    } else if (request.url === '/img/girls.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/girls.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/grad.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/grad.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/hand.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/hand.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/jess.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/jess.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/jess1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/jess1.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/mba.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/mba.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })


    } else if (request.url === '/img/ms.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/ms.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/online.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/online.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/rockline.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/rockline.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/sanjose.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/sanjose.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/img/under.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./img/under.jpeg', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })

    } else if (request.url === '/style.css') {
        fs.readFile('style.css', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        });
    } else {
        response.end('File not found!!!');
    }
});

server.listen(6789);
console.log("listening on port 6789");