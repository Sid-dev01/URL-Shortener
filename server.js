require('dotenv').config();

const app = require("./app");
const env = require("./src/config/env");


const startServer = async () => {
    try {
        const HOST = process.env.HOST;

        await app.listen({
            port: env.PORT,
            host: HOST
        });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};


startServer();