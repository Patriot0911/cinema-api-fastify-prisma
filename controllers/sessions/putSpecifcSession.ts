import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IChangeSessionBody, IGetByIdParams, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const putSpecifcSession = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        const { date, filmId, hallId } = req.body as IChangeSessionBody;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'session']));
        if(!date && !filmId && !hallId)
            return reply.code(400).send(getErrorMessage('noParamsToChange'));
        const updateData = Object.assign(
            {},
            date && {date},
            filmId && {filmId},
            hallId && {hallId}
        );
        try {
            const response = await instance.prisma.hall.update({
                where: {
                    id: parseInt(id)
                },
                data: updateData
            })
            if(!response)
                throw Error('No session found');
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

export default putSpecifcSession;