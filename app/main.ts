import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule,SwAppModule} from './app.module';

const platform=platformBrowserDynamic();

if(mainapp){
  platform.bootstrapModule(AppModule);
}

if(ngapp){
  platform.bootstrapModule(SwAppModule);
}
