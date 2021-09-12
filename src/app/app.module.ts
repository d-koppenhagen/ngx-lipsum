import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLipsumModule } from 'ngx-lipsum';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLipsumModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
