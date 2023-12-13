import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IGetByIdParams, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const getSpecificAvailable = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'film']));
        try {
            const response = await instance.prisma.availableFilms.findFirst(
                {
                    where: {
                        filmId: parseInt(id)
                    },
                    select: {
                        id: true,
                        filmId: true,
                        film: true
                    }
                }
            );
            if(!response)
                throw Error('No film found');
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

export default getSpecificAvailable;