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

  weather: any = "";
  tempC:string="";
  weatherArr:WeatherModel[]=[]
  weatherM:WeatherModel={ date:Date.toString(),
    avgtemp_C:"",
    avgvis:""}
  // ngOnInit(): void {
  //   this.getWeather("");
  // }

  getWeather(location:string) {
    this.weatherService.getWeather(location).subscribe(res => {
      this.weather = res['forecast'];
      let a = res.forecast;
      this.tempC=res[0]
    // let forecast =this.weather['forecast'];
     this.tempC=JSON.stringify(res, null, 4) ;
    // this.weatherM.avgtemp_C=res.
      //this.tempC=res.lo
    });
  }

}
