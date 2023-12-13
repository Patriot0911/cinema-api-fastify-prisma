import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import getErrorMessage from "../../libs/errorMessages";
import { IChangeSessionBody, IReturnState } from "../../libs/types";

const postSession = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { date, filmId, hallId } = req.body as IChangeSessionBody;
        if(!date || !filmId || !hallId)
            return reply.code(400).send(getErrorMessage('invalidArg', ['[name, filmId, hallid]', 'session']));
        try {
            const response = await instance.prisma.sessionInfo.create({
                data: {
                    date: date,
                    filmId: filmId,
                    hallId: hallId
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

export default postSession;