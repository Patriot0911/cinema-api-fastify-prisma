

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