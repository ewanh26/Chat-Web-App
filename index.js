const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

const httpServer = require('http').createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(content));
    res.end(content);
});

const io = require('socket.io')(httpServer);

io.on('connection', socket => {
    console.log("connected successfully");
    socket.on('send', () => {
        console.log("message sent");
    })
});

httpServer.listen(3000, () => {
    console.log("Go to http://localhost:3000");
});
