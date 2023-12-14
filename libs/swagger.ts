import { catTags } from "../options/categories";
import { filmTags } from "../options/films";
import { hallsTags } from "../options/halls";
import { sessionsTags } from "../options/sessions";
import { ticketsTags } from "../options/tickets";

export const swaggerOptions = {
    swagger: {
        info: {
            title: "Cinema API docs",
            description:
                "Explore the endpoints for each object and path so that you can get the most accurate information",
            version: "1.0.0",
        },
        host:       "localhost:8080",
        schemes:    ["http"],
        consumes:   ["application/json"],
        produces:   ["application/json"],
        tags: [
            { name: filmTags,           description: "Films endpoints" },
            { name: catTags,            description: "Categories endpoints" },
            { name: hallsTags,          description: "Halls endpoints" },
            { name: sessionsTags,       description: "Sessions endpoints" },
            { name: ticketsTags,        description: "Tickets endpoints" }
        ]
    }
};

export const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true
};