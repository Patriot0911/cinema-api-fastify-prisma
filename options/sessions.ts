import { RouteShorthandOptions } from "fastify";
import { errorInfoObject, searchByIdObject, standartInfoObject } from "./global";

export const sessionsTags = 'Sessions';
export const sessionBodyObject = {
    type: 'object',
    properties: {
        filmId: { type: 'number' },
        hallId: { type: 'number' },
        date: { type: 'string' }
    }
};
export const sessionObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        ...sessionBodyObject.properties
    }
};

export const getAllSessionsOpts: RouteShorthandOptions = {
    schema: {
        tags: [sessionsTags],
        description: 'Get All Sessions',
        response: {
            200: {
                type: 'array',
                items: sessionObject
            },
            500: errorInfoObject
        }
    }
};
export const getSpecificSessionOpts: RouteShorthandOptions = {
    schema: {
        tags: [sessionsTags],
        description: 'Get a specific session',
        params: searchByIdObject,
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    date: { type: 'string' },
                    film: standartInfoObject,
                    hall: standartInfoObject
                }
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const getSpecificSessionTicketsOpts: RouteShorthandOptions = {
    schema: {
        tags: [sessionsTags],
        description: 'Get a tickets lsit for specifc session',
        params: searchByIdObject,
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        date: { type: 'string' },
                        ownerInfo: { type: 'string' }
                    }
                }
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const postSessionOpts: RouteShorthandOptions = {
    schema: {
        tags: [sessionsTags],
        description: 'Create a session',
        body: sessionBodyObject,
        response: {
            201: sessionObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const putSpecifcSessionOpts: RouteShorthandOptions = {
    schema: {
        tags: [sessionsTags],
        description: 'Update an existing session',
        params: searchByIdObject,
        body: sessionBodyObject,
        response: {
            200: sessionObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const deleteSpecificSessionOpts: RouteShorthandOptions = {
    schema: {
        tags: [sessionsTags],
        description: 'Delete a specific session',
        params: searchByIdObject,
        response: {
            200: sessionObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};