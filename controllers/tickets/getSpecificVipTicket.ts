import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const getSpecificVipTicket = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'vip status']));
        try {
            const response = await instance.prisma.vipStatus.findFirst(
                {
                    where: {
                        id: parseInt(id)
                    },
                    select: {
                        id: true,
                        ticket: {
                            select: {
                                id: true,
                                ownerInfo: true,
                                sessionId: true,
                                cost: true
                            }
                        }
                    }
                }
            );
            if(!response)
                throw Error('No ticket found');
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

export default getSpecificVipTicket;