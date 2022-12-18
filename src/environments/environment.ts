// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dbConfig: {
    apiKey: "AIzaSyCzq_juaPUMNhL7SsG7arvY7WizBY91EzE",
    authDomain: "cdyne-systems.firebaseapp.com",
    projectId: "cdyne-systems",
    storageBucket: "cdyne-systems.appspot.com",
    messagingSenderId: "682531435738",
    appId: "1:682531435738:web:f82128ac1898aa56a421e3",
  },
  usersTable: 'users',
  sparePartsTable: 'spares',
  catalogsTable: 'catalogs',
  productsTable: 'products',
  cookieName:'cdyne-systems'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
