import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IChangeFilmBody, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const postFilm = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { name, description } = req.body as IChangeFilmBody;
        if(!name)
            return reply.code(400).send(getErrorMessage('invalidArg', ['name', 'film']));
        try {
            const response = await instance.prisma.film.create({
                data: {
                    name: name,
                    description: description
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

export default postFilm;