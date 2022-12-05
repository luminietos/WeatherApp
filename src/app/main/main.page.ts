import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  weatherTemp: any;
  dateToday = new Date();
  cityName = '';
  weatherImage: any;
  weatherDetails: any;
  name = '';
  loading = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    public httpClient: HttpClient
  ) {}

  loadData() {
    this.httpClient
      .get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`)
      .subscribe((results) => {
        console.log(results);
        this.weatherTemp = results;
        console.log(this.weatherTemp.main.temp);
        this.name = this.weatherTemp.name;
        this.weatherDetails = this.weatherTemp.weather[0];
        console.log(this.weatherDetails);
        this.weatherImage = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
        this.loading = false;
      });
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  ngOnInit() {}
}
