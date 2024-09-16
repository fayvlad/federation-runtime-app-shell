import {ApplicationConfig, ClassProvider, Provider, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {BASE_PATH_TOKEN} from "@epd/pattern-library";
import {OverlayContainer} from "@angular/cdk/overlay";
import {OverlayService} from "../overlay.service";
import {environment} from "../environments/environment";
const mfeProvider = []

if (environment.production || environment.mfe) {
  mfeProvider.push({provide: OverlayContainer, useClass: OverlayService})
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: BASE_PATH_TOKEN,
      useValue: environment.production ? 'https://document-upload-module-host.preprod.accuris.dev/assets' : 'http://localhost:4201/assets'
    },
    ...mfeProvider
  ]
};
