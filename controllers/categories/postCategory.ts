import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IReturnState, IChangeCategoryBody } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const postCategory = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { name } = req.body as IChangeCategoryBody;
        if(!name)
            return reply.code(400).send(getErrorMessage('invalidArg', ['name', 'category']));
        try {
            const response = await instance.prisma.category.create({
                data: {
                    name: name
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

export default postCategory;