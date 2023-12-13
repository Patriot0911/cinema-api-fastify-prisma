import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IChangeTicketBody } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const postTicket = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const props = req.body as IChangeTicketBody;
        if(!props.date || !props.ownerInfo || !props.sessionId || !props.cost)
            return reply.code(400).send(
                getErrorMessage('invalidArg', ['[date, ownerInfo, sessionId, cost]', 'ticket'])
            );
        try {
            const response = await instance.prisma.tickets.create(
                {
                    data: {
                        ...props
                    }
                }
            );
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

export default postTicket;