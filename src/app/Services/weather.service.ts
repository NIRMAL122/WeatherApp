import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {WeatherData} from '../models/weather.model'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  ApiKey=`be6055eb450d8e90a66d2fc153436221`;
  ApiUrl=`https://api.openweathermap.org/data/2.5/weather`;
  
  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(this.ApiUrl,{
      params:new HttpParams()
      .set('q',cityName)
      .set('appid',this.ApiKey)
    });
  }
}
