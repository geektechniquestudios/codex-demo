import next from 'npm:next@13.4.12';
import { createServer } from 'node:http';

const dev = Deno.env.get('NODE_ENV') !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

await app.prepare();

createServer((req, res) => {
  handle(req, res);
}).listen(3000, () => {
  console.log('> Ready on http://localhost:3000');
});
