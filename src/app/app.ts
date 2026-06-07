import { Component } from '@angular/core';
import { LipsumDirective, LipsumService } from 'ngx-lipsum';

@Component({
  selector: 'app-root',
  imports: [NgxLipsumComponent, LipsumDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public lipsumText: string = '';
  constructor(lipsum: LipsumService) {
    this.lipsumText = lipsum.get();
  }
}
