// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '807e30e3-aa17-4d72-98c6-9a2b4b4fd14e',
      authority: 'https://login.microsoftonline.com/6eeaf488-3de7-4c55-bd1e-97c618132316/V2.0',
    },
  },
  apiConfig: {
    scopes: ['https://duocazurecnenzo.onmicrosoft.com/807e30e3-aa17-4d72-98c6-9a2b4b4fd14e/azure_aws'],
    uri: 'http://localhost:4200',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
