import { Component } from '@angular/core';
import { Forecast } from '../Models/Forecast';
import { Forecastday } from '../Models/Forecastday';
import { Weather } from '../Models/Weather';
import { WeatherService } from './../services/weather.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private weatherService:WeatherService) { }
  forecastday:Forecastday[]|undefined;
weather:Weather|undefined
  getWeather(location:string) {
    this.weatherService.getWeather(location).subscribe(res => {
     this.weather=res;
   this.forecastday=this.weather.forecast.forecastday;
    });
  }

}
