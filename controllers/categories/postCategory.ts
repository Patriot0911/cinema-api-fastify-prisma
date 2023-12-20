import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IReturnState, IChangeCategoryBody } from "../../libs/types";

const postCategory = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { name } = req.body as IChangeCategoryBody;
        try {
            const response = await instance.prisma.category.create({
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

export default postCategory;