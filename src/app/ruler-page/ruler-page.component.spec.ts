import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerPageComponent } from './ruler-page.component';

describe('RulerPageComponent', () => {
  let component: RulerPageComponent;
  let fixture: ComponentFixture<RulerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
