import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // movie:any = searchinput.value.trim();

  constructor(private http:HttpClient) { }

  getMoviesApi(movie:any){
   return this.http.get(`http://www.omdbapi.com/?apikey=fa1c9c03&t=${movie}`)
  }

}
