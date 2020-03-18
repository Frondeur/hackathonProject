import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreIdeaComponent } from './core-idea.component';

describe('CoreIdeaComponent', () => {
  let component: CoreIdeaComponent;
  let fixture: ComponentFixture<CoreIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
