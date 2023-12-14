import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const selectedData = {
    id: true,
    date: true,
    ownerInfo: true
};

const getSpecificSessionTickets = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'session']));
        try {
            const response = await instance.prisma.tickets.findMany(
                {
                    where: {
                        sessionId: parseInt(id)
                    },
                    select: selectedData
                }
            );
            if(!response)
                throw Error('No hall found');
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

export default getSpecificSessionTickets;