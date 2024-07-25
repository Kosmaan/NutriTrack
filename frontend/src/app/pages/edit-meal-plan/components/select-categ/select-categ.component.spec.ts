import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategComponent } from './select-categ.component';

describe('SelectCategComponent', () => {
  let component: SelectCategComponent;
  let fixture: ComponentFixture<SelectCategComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCategComponent]
    });
    fixture = TestBed.createComponent(SelectCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
