import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IChangeHallBody, IReturnState } from "../../libs/types";

const postHall = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { name } = req.body as IChangeHallBody;
        try {
            const response = await instance.prisma.hall.create({
                data: {
                    name: name
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

export default postHall;