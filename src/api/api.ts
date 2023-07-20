import axios, { AxiosResponse } from "axios";
import { MovieType } from "../model/movie.interface";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 50000
});