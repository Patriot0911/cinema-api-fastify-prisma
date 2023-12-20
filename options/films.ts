import { RouteShorthandOptions } from "fastify";
import { errorInfoObject, searchByIdObject, standartInfoObject } from "./global";

export const filmTags = 'Films';
export const filmObject = {
    type: 'object',
    properties: {
        ...standartInfoObject.properties,
        description: { type: 'string' }
    }
};
export const availableFilmObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        filmId: { type: 'number' },
        film: filmObject
    }
};
export const filmBodyObject = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        description: { type: 'string' }
    }
};
export const filmIdBodyObject = {
    type: 'object',
    required: ['filmId'],
    properties: {
        filmId: { type: 'number' }
    }
};

export const getAllFilmsOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Get All Films',
        response: {
            200: {
                type: 'array',
                items: filmObject
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const getSpecifcFilmOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Get Specific Film by id',
        params: searchByIdObject,
        response: {
            200: filmObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const getAllAvailableOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Get All films that are in "Now Playing" list',
        response: {
            200: {
                type: 'array',
                items: availableFilmObject
            },
            500: errorInfoObject
        }
    }
};
export const getSpecificAvailableOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Get Specific Film from "Now Playing" list',
        params: searchByIdObject,
        response: {
            200: availableFilmObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const getFilmCategoriesOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Get Specific Film from "Now Playing" list',
        params: searchByIdObject,
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        cat: standartInfoObject
                    }
                }
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const postFilmOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Create a new Film',
        body: {
            type: 'object',
            required: ['name'],
            ...filmBodyObject.properties
        },
        response: {
            201: filmObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const postAvailableOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Post film into "Now Playing" list',
        body: filmIdBodyObject,
        response: {
            201: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    filmId: { type: 'number' }
                }
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const putSpecificFilmOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Update an existing film',
        params: searchByIdObject,
        body: filmBodyObject,
        response: {
            200: filmObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const deleteSpecificAvailableOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Delete Specific record from "Now Playing" list. Be sure you are providing record id',
        params: searchByIdObject,
        response: {
            200: availableFilmObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const deleteSpecificFilmOpts: RouteShorthandOptions = {
    schema: {
        tags: [filmTags],
        description: 'Delete Specific Film',
        params: searchByIdObject,
        response: {
            200: filmObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};