import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const nameAndIdSelect = {
    id: true,
    name: true
};
const selectedData = {
    id: true,
    date: true,
    film: {
        select: nameAndIdSelect
    },
    hall: {
        select: nameAndIdSelect
    }
};

const getSpecificSession = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'session']));
        try {
            const response = await instance.prisma.sessionInfo.findFirst(
                {
                    where: {
                        id: parseInt(id)
                    },
                    select: selectedData
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