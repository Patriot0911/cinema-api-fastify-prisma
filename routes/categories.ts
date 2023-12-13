import { FastifyInstance, FastifyPluginOptions } from "fastify";
import getAllCategories from "../controllers/categories/getAllCategories";
import getCategoryFilms from "../controllers/categories/getCategoryFilms";
import getSpecificCategory from "../controllers/categories/getSpecificCategory";
import postCategory from "../controllers/categories/postCategory";
import postFilmToCategory from "../controllers/categories/postFilmToCategory";
import deleteFilmFromCategory from "../controllers/categories/deleteFilmFromCategory";
import deleteSpecificCategory from "../controllers/categories/deleteSpecificCategory";
import {
    deleteFilmFromCategoryOpts,
    deleteSpecificCategoryOpts,
    getAllCategoriesOpts,
    getCategoryFilmsOpts,
    getSpecificCategoryOpts,
    postCategoryOpts,
    postFilmToCategoryOpts
} from "../options/categories";

const categoriesRoutes = (instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    instance.get('/', getAllCategoriesOpts, getAllCategories(instance));
    instance.get('/:id', getSpecificCategoryOpts, getSpecificCategory(instance));

    instance.get('/:id/films', getCategoryFilmsOpts, getCategoryFilms(instance));

    instance.post('/', postCategoryOpts, postCategory(instance));

    instance.post('/:id', postFilmToCategoryOpts, postFilmToCategory(instance));

    instance.delete('/:id', deleteSpecificCategoryOpts, deleteSpecificCategory(instance));
    instance.delete('/films/:id', deleteFilmFromCategoryOpts, deleteFilmFromCategory(instance));

    done();
};

export default categoriesRoutes;