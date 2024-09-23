import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers:[
    BrowserAnimationsModule,
    provideHttpClient(),
    ...appConfig.providers
  ]
}
)
  .catch((err) => console.error(err));
