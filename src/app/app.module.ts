import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockcompComponent } from './clockcomp/clockcomp.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockcompComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
