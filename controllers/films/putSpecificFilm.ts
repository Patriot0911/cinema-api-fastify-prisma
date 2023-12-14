
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IChangeFilmBody, IGetByIdParams, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const putSpecificFilm = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        const { name, description } = req.body as IChangeFilmBody;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'film']));
        const updateData = Object.assign(
            {},
            name && {name},
            description && {description}
        );
        if(Object.keys(updateData).length < 1)
            return reply.code(400).send(getErrorMessage('noParamsToChange'));
        try {
            const response = await instance.prisma.film.update({
                where: {
                    id: parseInt(id)
                },
                data: updateData
            })
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

export default putSpecificFilm;