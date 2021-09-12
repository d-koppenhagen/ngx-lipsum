import { Component } from '@angular/core';
import { LipsumService } from 'ngx-lipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public lipsumText: string;
  constructor(lipsum: LipsumService) {
    this.lipsumText = lipsum.get();
  }
}
