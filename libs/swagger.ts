export const swaggerOptions = {
    swagger: {
        info: {
            title: "Cinema API docs",
            description: "Explore the endpoints for each object and path so that you can get the most accurate information",
            version: "1.0.0",
        },
        host: "localhost",
        schemes: ["http"],
        consumes: ["application/json"],
        produces: ["application/json"],
        tags: [
            { name: "Films", description: "Films endpoints" }
        ],
    },
};

export const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
};