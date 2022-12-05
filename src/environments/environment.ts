/* eslint-disable @typescript-eslint/naming-convention */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  API_KEY: '52a09ab759b0b3350e7923decb8df29b',
  API_URL: 'https://api.openweathermap.org/data/2.5/',
  firebase: {
    projectId: 'thisfire-69a01',
    appId: '1:411488382939:web:5288d7520bf3785d8501fe',
    storageBucket: 'thisfire-69a01.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyBxffbXSafy4IeETS3OpltATcsW8i2Ru2E',
    authDomain: 'thisfire-69a01.firebaseapp.com',
    messagingSenderId: '411488382939',
    production: false,
  },
  // the weather app's environment
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
