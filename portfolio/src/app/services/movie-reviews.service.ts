import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewsService {

  constructor(private httpClient: HttpClient) { }

  getTopRatedMovies(page: number) {
    let params = new HttpParams;
    params = params.append(Constants.apiKeyParam, Constants.apiKey);
    params = params.append(Constants.page, page);
    return this.httpClient.get<any>(Constants.movieEndpoint + Constants.topRated, {params: params});
  }

  getMovieDetails(id: number) {
    let params = new HttpParams;
    params = params.append(Constants.apiKeyParam, Constants.apiKey);
    return this.httpClient.get<any>(Constants.movieEndpoint + id, {params: params});
  }
}
