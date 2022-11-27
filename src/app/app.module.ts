import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxLipsumComponent, LipsumDirective } from 'ngx-lipsum';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLipsumComponent, LipsumDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
