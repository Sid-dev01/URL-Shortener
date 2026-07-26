const UrlCache = require("../cache/url.cache");
const validateUrl = require("../utils/validateUrl");
const UrlRepository = require("../repositories/url.repository");
const generateShortCode = require("../utils/generateShortCode");

async function createShortUrl (originalUrl) {

    if (!validateUrl(originalUrl)){
        throw new Error("Invalid Url.");
    }

    const cachedShortCode = await UrlCache.getShortCodeByOriginalUrl(originalUrl);

    if(cachedShortCode){
        console.log("Look up Cache hit")

        return {
            originalUrl,
            shortUrl: `${process.env.BASE_URL}/${cachedShortCode}`,
        };
    }

    console.log("Lookup missed.");

    const existingUrl = await UrlRepository.findByOriginalUrl(originalUrl);

    if (existingUrl) {

        await UrlCache.setShortCodeByOriginalUrl(
            originalUrl,
            existingUrl.shortCode
        )

        return {
            originalUrl: existingUrl.originalUrl,
            shortUrl: `${process.env.BASE_URL}/${existingUrl.shortCode}`
        }
    };

    let shortCode = generateShortCode();

    while(await UrlRepository.findByShortCode(shortCode)) {
        shortCode = generateShortCode();
    }

    try {
        const url = await UrlRepository.create({
            originalUrl,
            shortCode
        })

        await UrlCache.setShortCodeByOriginalUrl(
            originalUrl,
            url.shortCode
        )

        return {
            originalUrl: url.originalUrl,
            shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
        };
    } catch (error) {
        if (
            error.code === "P2002" &&
            error.meta?.target?.includes("originalUrl")
        ) {
            const existingUrl = await UrlRepository.findByOriginalUrl(originalUrl);

            if(existingUrl){

                await UrlCache.setShortCodeByOriginalUrl(
                    originalUrl,
                    existingUrl.shortCode
                )

                return{
                    originalUrl: existingUrl.originalUrl,
                    shortUrl: `${process.env.BASE_URL}/${existingUrl.shortCode}`
                };
            }
        }

        throw error;
    }
}

async function getOriginalUrl(shortCode) {

    const cachedUrl = await UrlCache.getOriginalUrl(shortCode);

    if (cachedUrl) {
        console.log("Redirect Cache hit");
        return cachedUrl.originalUrl;
    }
    
    console.log("Redirect Cache miss")

    const url = await UrlRepository.findByShortCode(shortCode);

    if (!url) {
        throw new Error("Short URL not found");
    }

    await UrlCache.setOriginalUrl(shortCode, url);

    return url.originalUrl;
}


module.exports = {
    createShortUrl,
    getOriginalUrl,
}
