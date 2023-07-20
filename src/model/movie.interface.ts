import { ReviewType } from "./review.interface";

export interface MovieType {
  id: number;
  imdbId: string;
  title: string;
  trailerLink: string;
  releaseDate: Date;
  review: ReviewType[];
  genre: string[];
}
