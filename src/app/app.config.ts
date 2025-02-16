import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import routes from './app.routes';

const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(), provideRouter(routes)],
};

export default appConfig;
