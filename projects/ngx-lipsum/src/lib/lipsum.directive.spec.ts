import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LipsumDirective } from './lipsum.directive';

@Component({
  template: `
    <textarea [lipsum]></textarea>
    <p [lipsum]></p>
    <input [lipsum] />
    <ul [lipsum]></ul>
    <a [lipsum]></a>
  `,
  standalone: true,
})
class TestComponent {}

describe('LipsumDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [LipsumDirective, TestComponent],
    }).createComponent(TestComponent);
    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(LipsumDirective));
  });

  it('should have five lipsum elements', () => {
    expect(des.length).toBe(5);
  });
});
