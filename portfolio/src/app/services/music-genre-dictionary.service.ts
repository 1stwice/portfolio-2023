import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class MusicGenreDictionaryService {
  httpClient: any;

  constructor() { }

  getMusic(page: number) {
    let params = new HttpParams;
    params = params.append(Constants.apiKeyParam, Constants.apiKey);
    params = params.append(Constants.page, page);
    return this.httpClient.get<any>(Constants.movieEndpoint + Constants.topRated, {params: params});
  }
}
