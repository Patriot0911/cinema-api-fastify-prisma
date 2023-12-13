import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const getSpecificSession = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'session']));
        const selectedData = {
            select: {
                id: true,
                name: true
            }
        };
        try {
            const response = await instance.prisma.sessionInfo.findFirst(
                {
                    where: {
                        id: parseInt(id)
                    },
                    select: {
                        id: true,
                        date: true,
                        film: selectedData,
                        hall: selectedData
                    }
                }
            );
            if(!response)
                throw Error('No session found');
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

export default getSpecificSession;