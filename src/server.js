const Hapi = require('@hapi/hapi');
const { routes } = require('./routes');

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: '5000',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  /* eslint-disable */
  console.log(`Server berjalan pada: ${server.info.uri}`);
  /* eslint-disable */
};

init();
