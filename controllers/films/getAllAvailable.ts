import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState } from "../../libs/types";

const selectedData = {
    id: true,
    filmId: true,
    film: true
};

const getAllAvailable = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        try {
            const response = await instance.prisma.availableFilms.findMany(
                {
                    select: selectedData
                }
            );
            return reply.code(200).send(
                response
            );
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

export default getAllAvailable;