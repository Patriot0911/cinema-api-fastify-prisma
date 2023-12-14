import { FastifyInstance, FastifyPluginOptions } from "fastify";
import getAllTickets from "../controllers/tickets/getAllTickets";
import getSpecificTicket from "../controllers/tickets/getSpecificTicket";
import postTicket from "../controllers/tickets/postTicket";
import getSpecificVipTicket from "../controllers/tickets/getSpecificVipTicket";
import getSpecificTicketVipStatus from "../controllers/tickets/getSpecificTicketVipStatus";
import getAllTicketsVips from "../controllers/tickets/getAllTicketsVips";
import putSpecificTicket from "../controllers/tickets/putSpecificTicket";
import deleteSpecificTicket from "../controllers/tickets/deleteTicket";
import {
    getAllTicketsOpts,
    getSpecificTicketOpts,
    getSpecificTicketVipStatusOpts,
    getAllTicketsVipsOpts,
    getSpecificVipTicketOpts,
    postTicketOpts,
    putSpecificTicketOpts,
    deleteSpecificTicketOpts
} from "../options/tickets";


const ticketsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllTicketsOpts, getAllTickets(instance));
    instance.get('/:id', getSpecificTicketOpts, getSpecificTicket(instance));
    instance.get('/:id/vip', getSpecificTicketVipStatusOpts, getSpecificTicketVipStatus(instance))

    instance.get('/vips', getAllTicketsVipsOpts, getAllTicketsVips(instance));
    instance.get('/vips/:id', getSpecificVipTicketOpts, getSpecificVipTicket(instance));

    instance.post('/', postTicketOpts, postTicket(instance));

    instance.put('/:id', putSpecificTicketOpts, putSpecificTicket(instance));

    instance.delete('/:id', deleteSpecificTicketOpts, deleteSpecificTicket(instance));

    done();
};

export default ticketsRoutes;