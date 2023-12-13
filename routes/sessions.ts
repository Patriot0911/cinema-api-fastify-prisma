import { FastifyInstance, FastifyPluginOptions } from "fastify";
import deleteSpecificSession from "../controllers/sessions/deleteSpecificSession";
import getAllSessions from "../controllers/sessions/getAllSessions";
import getSpecificSession from "../controllers/sessions/getSpecificSession";
import postSession from "../controllers/sessions/postSession";
import putSpecifcSession from "../controllers/sessions/putSpecifcSession";
import getSpecificSessionTickets from "../controllers/sessions/getSpecificSessionTickets";


const sessionsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllSessions(instance));
    instance.get('/:id', getSpecificSession(instance));

    instance.get('/:id/tickets', getSpecificSessionTickets(instance))

    instance.post('/', postSession(instance));

    instance.put('/:id', putSpecifcSession(instance));

    instance.delete('/:id', deleteSpecificSession(instance));

    done();
};

export default sessionsRoutes;