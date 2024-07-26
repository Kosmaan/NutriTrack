import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownButtonComponent } from './drop-down-button.component';

describe('DropDownButtonComponent', () => {
  let component: DropDownButtonComponent;
  let fixture: ComponentFixture<DropDownButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownButtonComponent]
    });
    fixture = TestBed.createComponent(DropDownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
