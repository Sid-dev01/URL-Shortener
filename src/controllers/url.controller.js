const urlService = require("../services/url.service")

const createShortUrl = async(request, reply) => {
    const { longUrl } = request.body;

    const url = await urlService.createShortUrl({ longUrl });

    return reply.status(201).send({
        status: "success",
        data: {
            shortCode: url.shortCode,
            longUrl: url.longUrl,
            shortUrl: `${request.protocol}://${request.hostname}/${url.shortCode}`,
            createdAt: url.createdAt,
        },
    });
};

module.exports = {
    createShortUrl
}