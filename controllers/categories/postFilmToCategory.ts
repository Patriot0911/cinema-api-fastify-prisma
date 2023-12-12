import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams, IPostFilmToBody } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const postFilmToCategory = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        const { filmId } = req.body as IPostFilmToBody;
        if(!filmId)
            return reply.code(400).send(getErrorMessage('invalidArg', ['filmId', 'film inputing']));
        try {
            const response = await instance.prisma.categoryHasFilm.create({
                data: {
                    catId: parseInt(id),
                    filmId: filmId
                }
            });
            return reply.code(201).send({
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

export default postFilmToCategory;