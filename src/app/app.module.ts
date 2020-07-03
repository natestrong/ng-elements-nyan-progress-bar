import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {NyanProgressComponent} from './nyan-progress.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    NyanProgressComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(NyanProgressComponent, {injector});
    customElements.define('nyan-progress', el);
  }

  ngDoBootstrap(): void {

  }
}
