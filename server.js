require('dotenv').config();
const app = require("./app");


const startServer = async () => {
    try {
        const HOST = process.env.HOST;

        await app.listen({
            port: process.env.PORT,
            host: HOST
        });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};


startServer();