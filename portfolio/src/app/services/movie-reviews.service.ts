import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie-reviews.model';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewsService {

  constructor(private httpClient: HttpClient) { }

  getMovie() {
    return this.httpClient.get<Movie>('https://api.themoviedb.org/3/movie/550?api_key=e10e2e1ee69d09a232fffd476b418ac4');
  }
}
