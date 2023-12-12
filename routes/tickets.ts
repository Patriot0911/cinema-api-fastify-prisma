import { FastifyInstance, FastifyPluginOptions } from "fastify";


const ticketsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/tickets', () => {});
    instance.get('/tickets/:id', () => {});

    instance.get('/tickets/vips', () => {});
    instance.get('/tickets/vips/:id', () => {});

    instance.post('/tickets', () => {});

    instance.put('/tickets/:id', () => {});

    instance.delete('/tickets/:id', () => {});
};

export default ticketsRoutes;