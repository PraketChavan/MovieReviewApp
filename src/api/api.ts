import axios, { AxiosResponse } from "axios";
import { MovieType } from "../model/movie.interface";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  timeout: 50000,
});

const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
};

export const MovieApi = {
  getAllMovies: (): Promise<MovieType[]> => request.get("movie/all"),
  getMovie: (imdbId: string): Promise<MovieType> =>
    request.get("movie/" + imdbId),
};

export const Review = {};
