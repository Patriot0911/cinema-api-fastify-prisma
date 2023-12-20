import fp from 'fastify-plugin';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import getErrorMessage from '../libs/errorMessages';

const apiAuthPlugin = async (instance: FastifyInstance, options: any) => {
    instance.addHook("preHandler", auth);
};

const auth = (request: FastifyRequest, reply: FastifyReply, done: () => void) => {
    const key = request.headers['auth-key'];
    if(key !== process.env.APIKEY)
        return reply.code(401).send(getErrorMessage('notValidApiKey'));
    done();
};

export default fp(apiAuthPlugin);