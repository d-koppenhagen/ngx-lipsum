import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LipsumService } from './lipsum.service';
import { NgxLipsumComponent } from './ngx-lipsum.component';

describe('NgxLipsumComponent', () => {
  let component: NgxLipsumComponent;
  let fixture: ComponentFixture<NgxLipsumComponent>;
  let mockLipsumService: LipsumService;
  let mockLipsumServiceSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxLipsumComponent],
    }).compileComponents();
    mockLipsumService = TestBed.inject(LipsumService);
    mockLipsumServiceSpy = jest
      .spyOn(mockLipsumService, 'get')
      .mockReturnValue('mocked response');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLipsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('OnInit: should set the text value by asking the LipsumService', () => {
    expect(mockLipsumServiceSpy).toHaveBeenCalledTimes(1);
    expect(component.text).toEqual('mocked response');
  });

  it('OnChanges: should set the text value by asking the LipsumService with a new custom config', () => {
    component.config = {
      count: 100,
    };
    component.ngOnChanges({
      config: {
        currentValue: {
          count: 100,
        },
      } as SimpleChange,
    });
    expect(mockLipsumServiceSpy).toHaveBeenCalledWith({ count: 100 });
  });
});
