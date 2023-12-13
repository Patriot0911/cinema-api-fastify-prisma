import { FastifyInstance, FastifyPluginOptions } from "fastify";
import deleteSpecificHall from "../controllers/halls/deleteSpecificHall";
import getAllHalls from "../controllers/halls/getAllHalls";
import getSpecificHall from "../controllers/halls/getSpecificHall";
import postHall from "../controllers/halls/postHall";
import putSpecifcHall from "../controllers/halls/putSpecifcHall";
import getSpecifcHallSessions from "../controllers/halls/getSpecifcHallSessions";


const hallsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllHalls(instance));
    instance.get('/:id', getSpecificHall(instance));

    instance.get('/:id/sessions', getSpecifcHallSessions(instance))

    instance.post('/', postHall(instance));

    instance.put('/:id', putSpecifcHall(instance));

    instance.delete('/:id', deleteSpecificHall(instance));

    done();
};

export default hallsRoutes;