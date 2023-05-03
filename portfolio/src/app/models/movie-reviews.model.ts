import { SimpleHolder } from "./simple-holder.model";

export class MovieReviews {
    movies!: Movie[];
}

export class Movie {
    adult!: boolean;
    backdrop_path!: string;
    belongs_to_collection?: string;
    budget!: number;
    genres!: SimpleHolder[];
    homepage!: string;
    id!: number;
    imdb_id!: string;
    original_language!: string;
    original_title!: string;
    overview!: string;
    popularity!: number;
    poster_path!: string;
    production_companies?: SimpleHolder[];
    production_countries?: SimpleHolder[];
    release_date!: string;
    revenue!: number;
    runtime!: number;
    spoken_languages!: SimpleHolder[];
    status!: string;
    tagline!: string;
    title!: string;
    video!: boolean;
    vote_average!: number;
    vote_count!: number;
}
