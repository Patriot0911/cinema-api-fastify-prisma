import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IReturnState, IGetByIdParams, IPostFilmToBody } from "../../libs/types";

const postFilmToCategory = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        const { filmId } = req.body as IPostFilmToBody;
        try {
            const response = await instance.prisma.categoryHasFilm.create({
                data: {
                    catId: parseInt(id),
                    filmId: filmId
                }
            });
            return reply.code(201).send(
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

export default postFilmToCategory;