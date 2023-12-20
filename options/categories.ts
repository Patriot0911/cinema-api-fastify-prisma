import { RouteShorthandOptions } from "fastify";
import {
    errorInfoObject,
    searchByIdObject,
    standartInfoObject
} from "./global";
import { filmIdBodyObject } from "./films";

export const catTags = 'Categories';
export const categoryObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' }
    }
};
export const categoryHasFilmObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        filmId: { type: 'number' },
        catId: { type: 'number' }
    }
};
export const categoryFilmObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        film: {
            type: 'object',
            properties: {
                ...standartInfoObject.properties,
                description: { type: 'string' }
            }
        }
    }
};
export const categoryBodyObject = {
    type: 'object',
    required: ['name'],
    properties: {
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
export const getCategoryFilmsOpts: RouteShorthandOptions = {
    schema: {
        tags: [catTags],
        description: 'Get all films that are tagged with specific category',
        params: searchByIdObject,
        response: {
            200: {
                type: 'array',
                items: categoryFilmObject
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const postCategoryOpts: RouteShorthandOptions = {
    schema: {
        tags: [catTags],
        description: 'Create a new Category',
        body: categoryBodyObject,
        response: {
            201: categoryObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const postFilmToCategoryOpts: RouteShorthandOptions = {
    schema: {
        tags: [catTags],
        description: 'Add a specific film to certain category',
        params: searchByIdObject,
        body: filmIdBodyObject,
        response: {
            201: categoryHasFilmObject,
            500: errorInfoObject
        }
    }
};
export const putSpecificCategoryOpts: RouteShorthandOptions = {
    schema: {
        tags: [catTags],
        description: 'Update an existing category',
        params: searchByIdObject,
        body: categoryBodyObject,
        response: {
            200: categoryObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const deleteSpecificCategoryOpts: RouteShorthandOptions = {
    schema: {
        tags: [catTags],
        description: 'Delete a specific category',
        params: searchByIdObject,
        response: {
            200: standartInfoObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const deleteFilmFromCategoryOpts: RouteShorthandOptions = {
    schema: {
        tags: [catTags],
        description: 'Delete a specific record from `CatHasFilm`. Be sure you are providing record id',
        params: searchByIdObject,
        response: {
            200: categoryHasFilmObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};