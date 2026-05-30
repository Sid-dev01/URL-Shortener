const urlController = require("../controllers/url.controller");


const urlRoutes = async (app) => {
    app.post("/create-short-url", urlController.createShortUrl);
}

module.exports = urlRoutes;