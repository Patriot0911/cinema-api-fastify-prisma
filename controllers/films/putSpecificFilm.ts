
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IChangeFilmBody, IGetByIdParams, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const putSpecificFilm = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { name, description } = req.body as IChangeFilmBody;
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'film']));
        if(!name && !description)
            return reply.code(400).send(getErrorMessage('noParamsToChange'));
        const updateData = Object.assign(
            {},
            name && {name},
            description && {description}
        );
        try {
            const response = await instance.prisma.film.update({
                where: {
                    id: parseInt(id)
                },
                data: updateData
            })
            if(!response)
                throw Error('No film found');
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

export default putSpecificFilm;