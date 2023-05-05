import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service'
import { WeatherData } from './models/weather.model';
import {KelvinToCelsiusPipe} from './pipes/kelvin-to-celsius.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName: string = 'Bathinda'
  weatherDetails?: WeatherData

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe(data => {
        this.weatherDetails = data
        console.log(data)
      })
  }

}
