import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPageComponent } from './add-page.component';

describe('AddPageComponent', () => {
  let component: AddPageComponent;
  let fixture: ComponentFixture<AddPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPageComponent]
    });
    fixture = TestBed.createComponent(AddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
