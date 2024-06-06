const http = require('http');
const https = require('https');

const PORT = 3000;

const requestHandler = (req, res) => {
  if (req.method === 'GET' && req.url === '/steam-api') {
    const options = {
      hostname: 'api.steampowered.com',
      port: 443,
      path: '/ISteamApps/GetAppList/v2/',
      method: 'GET',
    };

    const proxyReq = https.request(options, (proxyRes) => {
      res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешить доступ со всех источников, лучше ограничить
      proxyRes.pipe(res);
    });

    proxyReq.on('error', (error) => {
      console.error('Proxy request error:', error);
      res.statusCode = 500;
      res.end('Internal server error');
    });

    proxyReq.end();
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
