import { Component } from '@angular/core';
import { WeatherModel } from '../Weather.Model';
import { WeatherService } from './../services/weather.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private weatherService: WeatherService) { }

  weather: string = "";
  
  getWeather(location:string) {
    this.weatherService.getWeather(location).subscribe(res => {
      this.weather = res;
    });
  }

}
