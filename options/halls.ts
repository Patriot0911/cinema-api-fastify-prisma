import { RouteShorthandOptions } from "fastify";
import { searchByIdObject, errorInfoObject, standartInfoObject } from "./global";

export const hallsTags = 'Halls';
export const hallObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' }
    }
};
export const hallBodyObject = {
    type: 'object',
    properties: {
        name: { type: 'string' }
    }
};
export const hallSessionsObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        date: { type: 'date' },
        film: standartInfoObject
    }
};

export const getAllHallsOpts: RouteShorthandOptions = {
    schema: {
        tags: [hallsTags],
        description: 'Get all halls',
        response: {
            200: {
                type: 'array',
                items: hallObject
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const getSpecificHallOpts: RouteShorthandOptions = {
    schema: {
        tags: [hallsTags],
        description: 'Get a specific hall',
        params: searchByIdObject,
        response: {
            200: hallObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const getSpecifcHallSessionsOpts: RouteShorthandOptions = {
    schema: {
        tags: [hallsTags],
        description: 'Get all the sessions that are scheduled for this hall',
        params: searchByIdObject,
        response: {
            200: {
                type: 'array',
                items: hallSessionsObject
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const postHallOpts: RouteShorthandOptions = {
    schema: {
        tags: [hallsTags],
        description: 'Create a new hall',
        body: hallBodyObject,
        response: {
            201: hallObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const putSpecifcHallOpts: RouteShorthandOptions = {
    schema: {
        tags: [hallsTags],
        description: 'Update an existing hall',
        params: searchByIdObject,
        body: hallBodyObject,
        response: {
            200: hallObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const deleteSpecificHallOpts: RouteShorthandOptions = {
    schema: {
        tags: [hallsTags],
        description: 'Delete specific hall by its id',
        params: searchByIdObject,
        response: {
            200: hallObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};