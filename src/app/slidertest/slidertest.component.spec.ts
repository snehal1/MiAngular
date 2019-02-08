import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidertestComponent } from './slidertest.component';

describe('SlidertestComponent', () => {
  let component: SlidertestComponent;
  let fixture: ComponentFixture<SlidertestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidertestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
