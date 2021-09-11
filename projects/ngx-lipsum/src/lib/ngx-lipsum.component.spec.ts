import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLipsumComponent } from './ngx-lipsum.component';

describe('NgxLipsumComponent', () => {
  let component: NgxLipsumComponent;
  let fixture: ComponentFixture<NgxLipsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxLipsumComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLipsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
