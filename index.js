const path = require('path');
const fastify = require('fastify')();

const PORT = process.env.PORT || 8080;

fastify.register(require('fastify-static'), {
  root: path.resolve(__dirname, 'static'),
}).listen(PORT, '0.0.0.0', err => {
  if (err) {
    throw err;
  }

  console.log(`Running on port http://0.0.0.0:${PORT}`);
});
