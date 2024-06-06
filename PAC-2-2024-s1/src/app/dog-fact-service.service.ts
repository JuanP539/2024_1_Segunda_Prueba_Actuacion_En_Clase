import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogFactServiceService {

  constructor(private http: HttpClient) { }

  getDogFact(){
  this.http.get("https://dog-api.kinduff.com/api/facts").subscribe(value => console.log(value) )
  }
}
