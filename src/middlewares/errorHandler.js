function errorHandler(error, request, reply) {

    if (error.message === "Invalid URL") {
        return reply.code(400).send({
            success: false,
            message: error.message,
        });
    }

    if (error.message === "Short URL not found") {
        return reply.code(404).send({
            success: false,
            message: error.message,
        });
    }

    request.log.error(error);

    return reply.code(500).send({
        success: false,
        message: "Internal Server Error",
    });
}

module.exports = errorHandler;