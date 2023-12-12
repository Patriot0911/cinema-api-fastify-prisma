import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IReturnState } from "../../libs/types";

const getAllFilms = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        try {
            const response = await instance.prisma.film.findMany();
            return reply.code(200).send({
                res: response
            });
        } catch(error: any) {
            return reply.code(500).send({
                error: {
                    message: error.message,
                    errorCode: error.errorCode
                }
            });
        }
    };
};

export default getAllFilms;