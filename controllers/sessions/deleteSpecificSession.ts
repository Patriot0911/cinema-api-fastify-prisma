import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import getErrorMessage from "../../libs/errorMessages";
import { IReturnState, IGetByIdParams } from "../../libs/types";

const deleteSpecificSession = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'session']));
        try {
            const response = await instance.prisma.sessionInfo.delete({
                where: {
                    id: parseInt(id)
                }
            });
            if(!response)
                throw Error('No session found');
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

export default deleteSpecificSession;