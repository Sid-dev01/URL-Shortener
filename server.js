const app = require("./app");


const startServer = async () => {
    try {
        const PORT = process.env.PORT;
        const HOST = process.env.HOST;

        await app.listen({
            port: PORT,
            host: HOST
        });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};


startServer();