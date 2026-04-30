import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const host = '0.0.0.0';
const port = Number(process.env.PORT) || 3000;
const root = fileURLToPath(new URL('.', import.meta.url));

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml; charset=utf-8'
};

function sendFile(res, filePath) {
  const ext = extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  const stream = createReadStream(filePath);

  stream.on('error', () => {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Erreur interne du serveur.');
  });

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache'
  });
  stream.pipe(res);
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const urlPath = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname;
  const safePath = normalize(urlPath).replace(/^\.+[\\/]+/, '');
  const filePath = join(root, safePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Accès refusé.');
    return;
  }

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    sendFile(res, filePath);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Fichier introuvable.');
});

server.listen(port, host, () => {
  console.log(`After the Shift en écoute sur http://${host}:${port}`);
});
