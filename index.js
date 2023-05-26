import http from "http";
const server = http.createServer((req, res) => { res.end('It works') });
server.listen(9000, '0.0.0.0', (err) => {
    console.log(err ? err : `Listening to ${9000}`);
});