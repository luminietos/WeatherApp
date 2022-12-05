import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
  ) {
    this.theMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
  theMenu() {
    this.navigate = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home-outline',
      },
      // {
      //   title: 'Log In',
      //   url: '/login',
      //   icon: 'log-out-outline',
      // },
      {
        title: 'Weather',
        url: '/main',
        icon: 'cloudy-night-outline',
      },
      {
        title: 'About',
        url: '/about',
        icon: 'body-outline',
      },
      {
        title: 'Contact',
        url: '/contact',
        icon: 'chatbubbles-outline',
      },
    ];
  }
}
