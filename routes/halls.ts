import { FastifyInstance, FastifyPluginOptions } from "fastify";


const hallsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/halls', () => {});
    instance.get('/halls/:id', () => {});

    instance.post('/halls', () => {});

    instance.put('/halls/:id', () => {});

    instance.delete('/halls/:id', () => {});
};

export default hallsRoutes;