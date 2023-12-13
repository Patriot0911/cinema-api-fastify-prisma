export const errorInfoObject = {
    type: 'object',
    properties: {
        error: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                errorCode: { type: 'string' }
            }
        }
    }
};

export const searchByIdObject = {
    type: 'object',
    properties: {
        id: { type: 'number' }
    }
};

export const standartInfoObject = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' }
    }
};
