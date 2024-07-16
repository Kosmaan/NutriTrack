import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMealbuttonComponent } from './edit-mealbutton.component';

describe('EditMealbuttonComponent', () => {
  let component: EditMealbuttonComponent;
  let fixture: ComponentFixture<EditMealbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMealbuttonComponent]
    });
    fixture = TestBed.createComponent(EditMealbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
