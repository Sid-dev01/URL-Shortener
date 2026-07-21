const UrlService = require("../services/url.service")


async function createShortUrl(request, reply) {
    const { originalUrl } = request.body;

    const response = await UrlService.createShortUrl(originalUrl);

    return reply.status(201).send({
        success: true,
        data: response
    })
}


module.exports = {
    createShortUrl
}