import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDarkSliderComponent } from './light-dark-slider.component';

describe('LightDarkSliderComponent', () => {
  let component: LightDarkSliderComponent;
  let fixture: ComponentFixture<LightDarkSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightDarkSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightDarkSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
