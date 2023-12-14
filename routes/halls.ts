import { FastifyInstance, FastifyPluginOptions } from "fastify";
import deleteSpecificHall from "../controllers/halls/deleteSpecificHall";
import getAllHalls from "../controllers/halls/getAllHalls";
import getSpecificHall from "../controllers/halls/getSpecificHall";
import postHall from "../controllers/halls/postHall";
import putSpecifcHall from "../controllers/halls/putSpecifcHall";
import getSpecifcHallSessions from "../controllers/halls/getSpecifcHallSessions";
import {
    getAllHallsOpts,
    getSpecificHallOpts,
    getSpecifcHallSessionsOpts,
    postHallOpts,
    putSpecifcHallOpts,
    deleteSpecificHallOpts
} from "../options/halls";


const hallsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllHallsOpts, getAllHalls(instance));
    instance.get('/:id', getSpecificHallOpts, getSpecificHall(instance));

    instance.get('/:id/sessions', getSpecifcHallSessionsOpts, getSpecifcHallSessions(instance))

    instance.post('/', postHallOpts, postHall(instance));

    instance.put('/:id', putSpecifcHallOpts, putSpecifcHall(instance));

    instance.delete('/:id', deleteSpecificHallOpts, deleteSpecificHall(instance));

    done();
};

export default hallsRoutes;