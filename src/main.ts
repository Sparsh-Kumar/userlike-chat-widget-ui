import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { UserlikeComponent } from './app/userlike/userlike.component';

createApplication(appConfig)
  .then((app) => {
    const UserLikeComp = createCustomElement(UserlikeComponent, { injector: app.injector });
    customElements.define('userlike-widget', UserLikeComp);
  })
  .catch((err) => console.error(err));
