import { FastifyInstance, FastifyPluginOptions } from "fastify";
import getAllFilms from "../controllers/films/getAllFilms";
import getSpecifcFilm from "../controllers/films/getSpecificFilm";
import getAllAvailable from "../controllers/films/getAllAvailable";
import postAvailable from "../controllers/films/postAvailable";
import getSpecificAvailable from "../controllers/films/getSpecificAvailable";
import getFilmCategories from "../controllers/films/getFilmCategories";
import postFilm from "../controllers/films/postFilm";
import putSpecificFilm from "../controllers/films/putSpecificFilm";
import deleteSpecificAvailable from "../controllers/films/deleteSpecificAvailable";
import deleteSpecificFilm from "../controllers/films/deleteSpecificFilm";
import {
    getAllFilmsOpts,
    getSpecifcFilmOpts,
    getAllAvailableOpts,
    getSpecificAvailableOpts,
    getFilmCategoriesOpts,
    postFilmOpts,
    postAvailableOpts,
    putSpecificFilmOpts,
    deleteSpecificAvailableOpts,
    deleteSpecificFilmOpts
} from "../options/films";


const filmsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllFilmsOpts, getAllFilms(instance));
    instance.get('/:id', getSpecifcFilmOpts, getSpecifcFilm(instance));

    instance.get('/available', getAllAvailableOpts, getAllAvailable(instance));
    instance.get('/available/:id', getSpecificAvailableOpts, getSpecificAvailable(instance));

    instance.get('/:id/categories', getFilmCategoriesOpts, getFilmCategories(instance));

    instance.post('', postFilmOpts, postFilm(instance));
    instance.post('/available', postAvailableOpts, postAvailable(instance));

    instance.put('/:id', putSpecificFilmOpts, putSpecificFilm(instance));

    instance.delete('/:id', deleteSpecificAvailableOpts, deleteSpecificFilm(instance));
    instance.delete('/available/:id', deleteSpecificFilmOpts, deleteSpecificAvailable(instance));

    done();
};

export default filmsRoutes;