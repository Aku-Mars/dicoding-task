const Hapi = require('@hapi/hapi');
const predictRoutes = require('./app/routes/predictRoutes');
const historyRoutes = require('./app/routes/historyRoutes');

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: '0.0.0.0',
        routes: {
            cors: { origin: ['*'] }
        },
    });

    // Daftarkan route
    server.route([...predictRoutes, ...historyRoutes]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
