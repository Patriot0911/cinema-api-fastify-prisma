import { RouteShorthandOptions } from "fastify";
import { errorInfoObject, searchByIdObject, standartInfoObject } from "./global";

export const ticketsTags = 'Tickets';
export const ticketBodyObject = {
    type: 'object',
    properties: {
        ownerInfo: { type: 'string' },
        sessionId: { type: 'number' },
        date: { type: 'string' },
        cost: { type: 'number' }
    }
};
export const ticketObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        ...ticketBodyObject.properties
    }
};
export const ticketVipStatusObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        ticketId: { type: 'number' }
    }
};

export const getAllTicketsOpts: RouteShorthandOptions = {
    schema: {
        tags: [ticketsTags],
        description: 'Get all tickets',
        response: {
            200: {
                type: 'array',
                items: ticketObject
            },
            500: errorInfoObject
        }
    }
};
export const getSpecificTicketOpts: RouteShorthandOptions = {
    schema: {
        tags: [ticketsTags],
        description: 'Get specific ticket',
        params: searchByIdObject,
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    ownerInfo: { type: 'string' },
                    date: { type: 'string' },
                    cost: { type: 'number' },
                    session: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            film: standartInfoObject,
                            hall: standartInfoObject
                        }
                    }
                }
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const getSpecificTicketVipStatusOpts: RouteShorthandOptions = {
    schema: {
        tags: [ticketsTags],
        description: 'Get ticket`s vip Status',
        params: searchByIdObject,
        response: {
            200: ticketVipStatusObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const getAllTicketsVipsOpts: RouteShorthandOptions = {
    schema: {
        tags: [ticketsTags],
        description: 'Get list of vip tickets',
        response: {
            200: {
                type: 'array',
                items: ticketVipStatusObject
            },
            500: errorInfoObject
        }
    }
};
export const getSpecificVipTicketOpts: RouteShorthandOptions = {
    schema: {
        tags: [ticketsTags],
        description: 'Get ticket info by vipstatus`s record id',
        params: searchByIdObject,
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    ticket: ticketObject
                }
            },
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const postTicketOpts: RouteShorthandOptions = {
    schema: {
        tags: [ticketsTags],
        description: 'Create Ticket',
        body: ticketBodyObject,
        response: {
            201: ticketObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const putSpecificTicketOpts: RouteShorthandOptions = {
    schema: {
        tags: [ticketsTags],
        description: 'Update an existing ticket',
        params: searchByIdObject,
        body: ticketBodyObject,
        response: {
            200: ticketObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};
export const deleteSpecificTicketOpts: RouteShorthandOptions = {
    schema: {
        tags: [ticketsTags],
        description: 'Delete specific ticket',
        params: searchByIdObject,
        response: {
            200: ticketObject,
            400: errorInfoObject,
            500: errorInfoObject
        }
    }
};