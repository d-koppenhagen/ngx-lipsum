import { Component, Input, SimpleChanges } from '@angular/core';
import { LoremIpsumParams, loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'ngx-lipsum',
  template: `<ng-container>{{ text }}</ng-container>`,
  standalone: true,
})
export class NgxLipsumComponent {
  @Input() config?: LoremIpsumParams;

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
