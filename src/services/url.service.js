const UrlRepository = require("../repositories/url.repository");
const generateShortCode = require("../utils/generateShortCode");

async function createShortUrl (originalUrl) {

    let shortCode = generateShortCode();

    while(await UrlRepository.findByShortCode(shortCode)) {
        shortCode = generateShortCode();
    }

    const url = await UrlRepository.create({
        originalUrl,
        shortCode
    })

    return {
        originalUrl: url.originalUrl,
        shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
    };
}


module.exports = {
    createShortUrl,
}
