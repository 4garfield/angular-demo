// fix Uncaught reflect-metadata shim is required when using class decorators
import 'zone.js/dist/zone';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
