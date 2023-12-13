import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import getErrorMessage from "../../libs/errorMessages";
import { IReturnState, IGetByIdParams, IChangeTicketBody } from "../../libs/types";

const putSpecificTicket = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        const { date, ownerInfo, sessionId, cost } = req.body as IChangeTicketBody;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'ticket']));
        const updateData = Object.assign(
            {},
            date && {date},
            ownerInfo && {ownerInfo},
            sessionId && {sessionId},
            cost && {cost}
        );
        if(Object.keys(updateData).length < 1)
            return reply.code(400).send(getErrorMessage('noParamsToChange'));
        try {
            const response = await instance.prisma.tickets.update({
                where: {
                    id: parseInt(id)
                },
                data: updateData
            })
            if(!response)
                throw Error('No ticket found');
            return reply.code(201).send({
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

export default putSpecificTicket;