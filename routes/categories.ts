import { FastifyInstance, FastifyPluginOptions } from "fastify";
import getAllCategories from "../controllers/categories/getAllCategories";
import getCategoryFilms from "../controllers/categories/getCategoryFilms";
import getSpecificCategory from "../controllers/categories/getSpecificCategory";
import postCategory from "../controllers/categories/postCategory";
import postFilmToCategory from "../controllers/categories/postFilmToCategory";
import deleteFilmFromCategory from "../controllers/categories/deleteFilmFromCategory";
import deleteSpecificCategory from "../controllers/categories/deleteSpecificCategory";

const categoriesRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllCategories(instance));
    instance.get('/:id', getSpecificCategory(instance));

    instance.get('/:id/films', getCategoryFilms(instance));

    instance.post('/', postCategory(instance));

    instance.post('/:id', postFilmToCategory(instance));

    instance.delete('/:id', deleteSpecificCategory(instance));
    instance.delete('/films/:id', deleteFilmFromCategory(instance));

    done();
};

export default categoriesRoutes;