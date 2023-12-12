import { FastifyInstance, FastifyPluginOptions } from "fastify";


const sessionsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/sessions', () => {});
    instance.get('/sessions/:id', () => {});

    instance.post('/sessions', () => {});

    instance.put('/sessions/:id', () => {});

    instance.delete('/sessions/:id', () => {});
};

export default sessionsRoutes;