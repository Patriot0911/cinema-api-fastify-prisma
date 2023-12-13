import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const deleteFilmFromCategory = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'data row']));
        try {
            const response = await instance.prisma.categoryHasFilm.delete({
                where: {
                    id: parseInt(id)
                }
            });
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

export default deleteFilmFromCategory;