// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoibHVpc2dtaiIsImEiOiJjazVuZ2h2b3QxYWU1M29wZ2FhZnU2aGRvIn0.bOkoja716OzRfwAo6y7WSA'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyBEhQBmpNJF80OoA7KItDtyTBsIJWUjUxs',
    authDomain: 'mapbox-c904e.firebaseapp.com',
    databaseURL: 'https://mapbox-c904e.firebaseio.com',
    projectId: 'mapbox-c904e',
    storageBucket: 'mapbox-c904e.appspot.com',
    messagingSenderId: '65212993953',
    appId: '1:65212993953:web:14c66155fefd55472cfbe0',
    measurementId: 'G-N8QT266CVN'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
