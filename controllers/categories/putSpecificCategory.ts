import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IReturnState, IChangeCategoryBody, IGetByIdParams } from "../../libs/types";
import getErrorMessage from "../../libs/errorMessages";

const putSpecificCategory = (instance: FastifyInstance) => {
    return async (req: FastifyRequest, reply: FastifyReply): Promise<IReturnState> => {
        const { name } = req.body as IChangeCategoryBody;
        const { id } = req.params as IGetByIdParams;
        if(!name || !parseInt(id))
            return reply.code(400).send(getErrorMessage('invalidArg', ['name / id', 'category']));
        try {
            const response = await instance.prisma.category.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    name: name
                }
            });
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

export default putSpecificCategory;