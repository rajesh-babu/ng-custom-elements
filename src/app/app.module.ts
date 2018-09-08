import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MyComp1Component } from './my-comp1/my-comp1.component';
import { MyComp2Component } from './my-comp2/my-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComp1Component,
    MyComp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    MyComp1Component,
    MyComp2Component
  ]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const madeWithLoveElement = createCustomElement(MyComp1Component, { injector });
    const heartElement = createCustomElement(MyComp2Component, { injector });

    customElements.define('app-my-comp1', madeWithLoveElement);
    customElements.define('app-my-comp2', heartElement);
  }

  ngDoBootstrap() { }

}

