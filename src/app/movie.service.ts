import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient){}
  
  getmovielist(){
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=5abb4ade88e82d63d0254f107dedcc7b")
  }

  getmoviepopular(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=5abb4ade88e82d63d0254f107dedcc7b")
  }

  //  api_key: string = '5abb4ade88e82d63d0254f107dedcc7b';
  //  imageBaseURL: string = "https://image.tmdb.org/t/p/";

  // fetchDataFromServer<T>(url: string, callback: (data: T, optionalParam?: any) => void, optionalParam?: any): void {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => callback(data, optionalParam));
  // }
  
}