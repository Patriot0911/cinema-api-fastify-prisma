import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IChangeSessionBody, IGetByIdParams, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const putSpecifcSession = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { id } = req.params as IGetByIdParams;
        const { date, filmId, hallId } = req.body as IChangeSessionBody;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'session']));
        const updateData = Object.assign(
            {},
            new Date(date) && {date},
            filmId && {filmId},
            hallId && {hallId}
        );
        if(Object.keys(updateData).length < 1)
            return reply.code(400).send(getErrorMessage('noParamsToChange'));
        try {
            const response = await instance.prisma.sessionInfo.update({
                where: {
                    id: parseInt(id)
                },
                data: updateData
            })
            if(!response)
                throw Error('No session found');
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

export default putSpecifcSession;