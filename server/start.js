

import phpServer from 'php-server';

const server = await phpServer({port: 8888, base:'src'});
console.log(`PHP server running at ${server.url}`);