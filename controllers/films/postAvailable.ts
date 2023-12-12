import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IPostFilmToBody, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";


const postAvailable = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { filmId } = req.body as IPostFilmToBody;
        if(!filmId)
            return reply.code(400).send(getErrorMessage('invalidArg', ['filmid', 'film']));
        try {
            const response = await instance.prisma.availableFilms.create({
                data: {
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

export default postAvailable;