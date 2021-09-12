import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ILoremIpsumParams } from 'lorem-ipsum';
import { LipsumService } from './lipsum.service';

@Component({
  selector: 'ngx-lipsum',
  template: `<ng-container>{{ text }}</ng-container>`,
  styles: [],
})
export class NgxLipsumComponent implements OnInit {
  @Input() config?: ILoremIpsumParams;

  public text!: string;
  constructor(private lipsum: LipsumService) {}

  ngOnInit(): void {
    this.text = this.lipsum.get(this.config);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.text = this.lipsum.get(changes.config.currentValue);
  }
}
