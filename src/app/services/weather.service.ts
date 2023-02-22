import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
baseUrl = "https://localhost:44381/api";
  constructor(private http: HttpClient) { }
private location:string=""
getWeather(location:string){
  return this.http.get<string>(this.baseUrl+"/Forecast/Get3DaysWeather/"+location);
}

}
