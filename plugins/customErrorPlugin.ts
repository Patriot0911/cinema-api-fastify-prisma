import fp from 'fastify-plugin';
import { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const customErrorPlugin = async (instance: FastifyInstance, options: any) => {
    instance.setErrorHandler(errorHandle);
};

const errorHandle = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    return reply
        .code(error.statusCode || 500)
        .send({
            error: {
                message: error.message,
                errorCode: error.statusCode
            }
        });
};

export default fp(customErrorPlugin);