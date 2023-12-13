import { FastifyInstance, FastifyReply } from "fastify";
import { FastifyRequest } from "fastify/types/request";
import { IReturnState } from "../../libs/types";

const getAllTickets = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        try {
            const response = await instance.prisma.tickets.findMany();
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

export default getAllTickets;