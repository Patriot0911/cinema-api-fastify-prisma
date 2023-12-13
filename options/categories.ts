import { RouteShorthandOptions } from "fastify";
import { errorInfoObject } from "./global";

export const catTags = 'Categories';

const categoryObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' }
    }
};

export const getAllCategoriesOpts: RouteShorthandOptions = {
    schema: {
        tags: [catTags],
        description: 'Get All Categories from database',
        response: {
            200: {
                type: 'array',
                items: categoryObject
            },
            500: errorInfoObject
        }
    }
    // ,preHandler: examplePreHandler as for example we can add some validation
};

export const getSpecificCategoryOpts: RouteShorthandOptions = {
    schema: {
        tags: [catTags],
        description: 'Get Specific Category by id',
        response: {
            200: categoryObject,
            500: errorInfoObject
        }
    }
};