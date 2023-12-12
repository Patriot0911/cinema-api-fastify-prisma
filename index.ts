import fastify from 'fastify';
import dotenv from 'dotenv';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import prismaPlugin from './prisma/prismaPlugin';
import { swaggerOptions, swaggerUiOptions } from './libs/swagger';

import filmsRoutes from './routes/films';
import categoriesRoutes from './routes/categories';

dotenv.config();

const server = fastify({
    // logger: true
});

/* Swagger */
server.register(fastifySwagger, swaggerOptions);
server.register(fastifySwaggerUi, swaggerUiOptions);

/* Prisma */
server.register(prismaPlugin);

/* Routes */
server.register(filmsRoutes, {
    prefix: '/films'
});
server.register(categoriesRoutes, {
    prefix: '/categories'
});


server.listen({
    port: parseInt(process.env.PORT!)
}, (err, address) => {
    if(err) {
        console.error(err);
        return process.exit(1);
    };
    console.log(`Server is running on ${address}`);
});