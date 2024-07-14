import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentButtonComponent } from './accent-button.component';

describe('AccentButtonComponent', () => {
  let component: AccentButtonComponent;
  let fixture: ComponentFixture<AccentButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccentButtonComponent]
    });
    fixture = TestBed.createComponent(AccentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
