import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../Models/Forecast';
import { Weather } from '../Models/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
baseUrl = "https://localhost:44381/api";
  constructor(private http: HttpClient) { }

getWeather(location:string){
  return this.http.get<Weather>(this.baseUrl+"/Forecast/Get3DaysWeather/"+location);
}

}
