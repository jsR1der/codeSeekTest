import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StepComponent} from "./step/step.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StepComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
