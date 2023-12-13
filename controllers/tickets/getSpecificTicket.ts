import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const getSpecificTicket = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'ticket']));
        try {
            const response = await instance.prisma.tickets.findFirst(
                {
                    where: {
                        id: parseInt(id)
                    },
                    select: {
                        id: true,
                        ownerInfo: true,
                        date: true,
                        cost: true,
                        session: {
                            select: {
                                id: true,
                                film: {
                                    select: {
                                        id: true,
                                        name: true
                                    }
                                },
                                hall: {
                                    select: {
                                        id: true,
                                        name: true
                                    }
                                }
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

export default getSpecificTicket;