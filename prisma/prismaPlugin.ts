import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

declare module 'fastify' {
    interface FastifyInstance {
        prisma: PrismaClient
    }
};

const prismaPlugin = async (instance: FastifyInstance, options: any) => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    instance.decorate('prisma', prisma);

    instance.addHook('onClose', async (server) => {
        await server.prisma.$disconnect();
    });
};

export default fp(prismaPlugin);