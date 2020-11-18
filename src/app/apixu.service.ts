import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  myApiKey: string ='7f0be93a4da8f8ded161edbed0de3fca';

  constructor(private http:HttpClient) { }

  getWeather(location){
    return this.http.get('http://api.weatherstack.com/current?access_key='+this.myApiKey + '&query=' + location)
  }
}
