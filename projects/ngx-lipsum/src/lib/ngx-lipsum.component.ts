import { Component, Input, SimpleChanges } from '@angular/core';
import { ILoremIpsumParams, loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'ngx-lipsum',
  template: `<ng-container>{{ text }}</ng-container>`,
  standalone: true,
})
export class NgxLipsumComponent {
  @Input() config?: ILoremIpsumParams;

  public text!: string;
  constructor() {
    this.setText();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setText();
  }

  private setText() {
    this.text = loremIpsum(this.config);
  }
}
