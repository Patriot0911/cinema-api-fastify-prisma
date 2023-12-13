import { FastifyReply, FastifyRequest } from "fastify";

export const examplePreHandler = (req: FastifyRequest, rep: FastifyReply, next: () => void) => {
    // some Validation here
    console.log('Hi! I am validator');
    next();
};