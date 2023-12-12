import { FastifyErrorCodes } from "fastify";

export interface IReturnState {
    res?: any;
    error?: IErrorResponse;
};
export interface IErrorResponse {
    message: string;
    errorCode?: FastifyErrorCodes;
};

export interface IGetByIdParams {
    id: string;
};

export interface IPostFilmToBody {
    filmId: number;
};
export interface IChangeFilmBody {
    name: string;
    description?: string;
};
export interface IChangeCategoryBody {
    name: string;
};