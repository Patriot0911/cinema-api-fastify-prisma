import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const deleteSpecificAvailable = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidId', ['film']));
        try {
            const response = await instance.prisma.availableFilms.delete({
                where: {
                    id: parseInt(id)
                },
                select: {
                    id: true,
                    filmId: true,
                    film: true
                }
            });
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

export default deleteSpecificAvailable;