import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IChangeHallBody, IGetByIdParams, IReturnState } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const putSpecifcHall = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { name } = req.body as IChangeHallBody;
        const { id } = req.params as IGetByIdParams;
        if(!parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['id', 'hall']));
        if(!name)
            return reply.code(400).send(getErrorMessage('noParamsToChange'));
        try {
            const response = await instance.prisma.hall.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    name: name
                }
            })
            if(!response)
                throw Error('No hall found');
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

export default putSpecifcHall;