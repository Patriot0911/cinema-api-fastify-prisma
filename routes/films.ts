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


const filmsRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/',               getAllFilms(instance));
    instance.get('/:id',            getSpecifcFilm(instance));

    instance.get('/available',      getAllAvailable(instance));
    instance.get('/available/:id',  getSpecificAvailable(instance));

    instance.get('/:id/categories', getFilmCategories(instance));

    instance.post('',               postFilm(instance));
    instance.post('/available',     postAvailable(instance));

    instance.put('/:id',            putSpecificFilm(instance));

    instance.delete('/:id',             deleteSpecificFilm(instance));
    instance.delete('/available/:id',   deleteSpecificAvailable(instance));

    done();
};

export default filmsRoutes;