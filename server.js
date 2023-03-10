const https = require('https');
const fs = require('fs');
const jsonServer = require('json-server');
const auth = require('json-server-auth');

const options = {
  key: fs.readFileSync(
    '/etc/letsencrypt/live/acc.my-account.p-e.kr/privkey.pem'
  ),
  cert: fs.readFileSync('/etc/letsencrypt/live/acc.my-account.p-e.kr/cert.pem')
};

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db; // router db를 server에 bind
server.use(auth);
server.use(router);

https
  .createServer(options, server)
  .listen(8080, 'acc.my-account.p-e.kr', () => {
    console.log('JSON Server is running');
  });
