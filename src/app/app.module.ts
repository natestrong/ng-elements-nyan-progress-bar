import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NyanProgressComponent} from './nyan-progress.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    NyanProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(NyanProgressComponent, {injector});
    customElements.define('nyan-progress', el);
  }
}
