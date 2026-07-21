const prisma = require("../config/prisma");

class UrlRepository {
    create(data){
        return prisma.url.create({
            data,
        });
    }

    findByShortCode(shortCode){
        return prisma.url.findUnique({
            where: {
                shortCode,
            }
        })
    }

    findByOriginalUrl(originalUrl){
        return prisma.url.findFirst({
            where: {
                originalUrl
            }
        })
    }
}

module.exports = new UrlRepository();
