import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import getErrorMessage from "../../libs/errorMessages";
import { IReturnState, IGetByIdParams } from "../../libs/types";

const deleteSpecificTicket = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'ticket']));
        try {
            const response = await instance.prisma.tickets.delete({
                where: {
                    id: parseInt(id)
                }
            });
            if(!response)
                throw Error('No ticket found');
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

export default deleteSpecificTicket;