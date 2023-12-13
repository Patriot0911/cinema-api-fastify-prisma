import { FastifyInstance, FastifyPluginOptions } from "fastify";
import getAllTickets from "../controllers/tickets/getAllTickets";
import getSpecificTicket from "../controllers/tickets/getSpecificTicket";
import postTicket from "../controllers/tickets/postTicket";
import getSpecificVipTicket from "../controllers/tickets/getSpecificVipTicket";
import getSpecificTicketVipStatus from "../controllers/tickets/getSpecificTicketVipStatus";
import getAllTicketsVips from "../controllers/tickets/getAllTicketsVips";
import putSpecificTicket from "../controllers/tickets/putSpecificTicket";
import deleteSpecificTicket from "../controllers/tickets/deleteTicket";


const ticketsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllTickets(instance));
    instance.get('/:id', getSpecificTicket(instance));
    instance.get('/:id/vip', getSpecificTicketVipStatus(instance))

    instance.get('/vips', getAllTicketsVips(instance));
    instance.get('/vips/:id', getSpecificVipTicket(instance));

    instance.post('/', postTicket(instance));

    instance.put('/:id', putSpecificTicket(instance));

    instance.delete('/:id', deleteSpecificTicket(instance));

    done();
};

export default ticketsRoutes;