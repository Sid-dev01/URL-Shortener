const swaggerOptions = {
    openapi: {
        openapi: "3.0.3",
        info: {
            title: "URL Shortner API",
            description: "Professional API documentation for creating and resolving short URLs.",
            version: "1.0.0",
        },
        servers: [
            {
                url: process.env.BASE_URL || "http://localhost:4001",
                description: "Current API server",
            },
        ],
        tags: [
            {
                name: "System",
                description: "Operational endpoints for the API service.",
            },
            {
                name: "URLs",
                description: "Create short links and resolve short codes.",
            },
        ],
    },
    hideUntagged: true,
};

const swaggerUiOptions = {
    routePrefix: "/docs",
    staticCSP: true,
    uiConfig: {
        deepLinking: true,
        displayRequestDuration: true,
        docExpansion: "list",
        filter: true,
        persistAuthorization: true,
        tryItOutEnabled: true,
    },
    theme: {
        title: "URL Shortner API Docs",
        css: [
            {
                filename: "theme.css",
                content: `
                    body {
                        background: #f6f7fb;
                    }

                    .swagger-ui {
                        color: #182230;
                        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                    }

                    .swagger-ui .topbar {
                        background: #111827;
                        border-bottom: 1px solid #344054;
                        padding: 12px 0;
                    }

                    .swagger-ui .wrapper {
                        max-width: 1180px;
                    }

                    .swagger-ui .info {
                        margin: 34px 0 24px;
                    }

                    .swagger-ui .info .title {
                        color: #101828;
                        font-size: 34px;
                        font-weight: 700;
                    }

                    .swagger-ui .info .description,
                    .swagger-ui .info p {
                        color: #475467;
                        font-size: 15px;
                        line-height: 1.7;
                    }

                    .swagger-ui .scheme-container,
                    .swagger-ui .opblock,
                    .swagger-ui .model-box {
                        border-radius: 8px;
                        box-shadow: 0 12px 32px rgba(16, 24, 40, 0.08);
                    }

                    .swagger-ui .scheme-container {
                        background: #ffffff;
                        border: 1px solid #e4e7ec;
                        padding: 18px 20px;
                    }

                    .swagger-ui .opblock {
                        background: #ffffff;
                        border: 1px solid #e4e7ec;
                        overflow: hidden;
                    }

                    .swagger-ui .opblock .opblock-summary {
                        padding: 12px 16px;
                    }

                    .swagger-ui .opblock-tag {
                        border-bottom: 1px solid #e4e7ec;
                        color: #101828;
                        font-size: 22px;
                        margin: 30px 0 14px;
                        padding: 0 0 10px;
                    }

                    .swagger-ui .opblock.opblock-get {
                        border-color: #bfdbfe;
                    }

                    .swagger-ui .opblock.opblock-post {
                        border-color: #bbf7d0;
                    }

                    .swagger-ui .btn,
                    .swagger-ui .btn.execute,
                    .swagger-ui .btn.authorize {
                        border-radius: 6px;
                        box-shadow: none;
                        font-weight: 650;
                    }

                    .swagger-ui .btn.execute {
                        background: #2563eb;
                        border-color: #2563eb;
                    }

                    .swagger-ui input[type=text],
                    .swagger-ui textarea {
                        border-radius: 6px;
                        border-color: #d0d5dd;
                    }

                    .swagger-ui table tbody tr td {
                        padding: 12px 0;
                    }
                `,
            },
        ],
    },
};

module.exports = {
    swaggerOptions,
    swaggerUiOptions,
};
