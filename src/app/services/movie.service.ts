import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResult, MovieResult } from './interfaces';
import { Observable, delay } from 'rxjs';

const BASE_URL='http://api.themoviedb.org/3'
const API_KEY=environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() { }

  getTopRatedMovies(page=1):Observable<ApiResult> {
    return this.http.get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`)
    .pipe(
      delay(2000)
    );
  }

  getMovieDetails(id:String):Observable<MovieResult>{
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  }
}
