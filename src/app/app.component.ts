import { Component } from '@angular/core';
import {
  LipsumService,
  LipsumDirective,
  NgxLipsumComponent,
} from '../../projects/ngx-lipsum/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgxLipsumComponent, LipsumDirective],
  standalone: true,
})
export class AppComponent {
  public lipsumText: string = '';
  constructor(lipsum: LipsumService) {
    this.lipsumText = lipsum.get();
  }
}
