const errorHandler = (error, request, reply) => {
    request.log.error(error);

    const statusCode = error.statusCode || 500;

    reply.status(statusCode).send({
        status: error.status || "error",
        message: error.message || "Internal Server Error",
    });
};


module.exports = errorHandler;