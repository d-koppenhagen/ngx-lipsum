import { NgModule } from '@angular/core';
import { NgxLipsumComponent } from './ngx-lipsum.component';
import { LipsumDirective } from './lipsum.directive';

@NgModule({
  declarations: [NgxLipsumComponent, LipsumDirective],
  imports: [],
  exports: [NgxLipsumComponent, LipsumDirective],
})
export class NgxLipsumModule {}
