import { FastifyInstance, FastifyPluginOptions } from "fastify";
import deleteSpecificSession from "../controllers/sessions/deleteSpecificSession";
import getAllSessions from "../controllers/sessions/getAllSessions";
import getSpecificSession from "../controllers/sessions/getSpecificSession";
import postSession from "../controllers/sessions/postSession";
import putSpecifcSession from "../controllers/sessions/putSpecifcSession";
import getSpecificSessionTickets from "../controllers/sessions/getSpecificSessionTickets";
import {
    getAllSessionsOpts,
    getSpecificSessionOpts,
    getSpecificSessionTicketsOpts,
    postSessionOpts,
    putSpecifcSessionOpts,
    deleteSpecificSessionOpts
} from "../options/sessions";


const sessionsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllSessionsOpts, getAllSessions(instance));
    instance.get('/:id', getSpecificSessionOpts, getSpecificSession(instance));

    instance.get('/:id/tickets', getSpecificSessionTicketsOpts, getSpecificSessionTickets(instance))

    instance.post('/', postSessionOpts, postSession(instance));

    instance.put('/:id', putSpecifcSessionOpts, putSpecifcSession(instance));

    instance.delete('/:id', deleteSpecificSessionOpts, deleteSpecificSession(instance));

    done();
};

export default sessionsRoutes;