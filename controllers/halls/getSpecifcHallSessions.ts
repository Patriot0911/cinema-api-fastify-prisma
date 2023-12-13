import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import getErrorMessage from "../../libs/errorMessages";
import { IReturnState, IGetByIdParams } from "../../libs/types";

const getSpecifcHallSessions = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'hall']));
        try {
            const response = await instance.prisma.sessionInfo.findMany(
                {
                    where: {
                        hallId: parseInt(id)
                    },
                    select: {
                        id: true,
                        film: {
                            select: {
                                id: true,
                                name: true
                            }
                        },
                        date: true
                    }
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

export default getSpecifcHallSessions;