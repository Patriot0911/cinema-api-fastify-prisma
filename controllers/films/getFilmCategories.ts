import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IGetByIdParams, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const selectedData = {
    id: true,
    cat: true
};

const getFilmCategories = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'film']));
        try {
            const response = await instance.prisma.categoryHasFilm.findMany(
                {
                    where: {
                        filmId: parseInt(id)
                    },
                    select: selectedData
                }
            );
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

export default getFilmCategories;