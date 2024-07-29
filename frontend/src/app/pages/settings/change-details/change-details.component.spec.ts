import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetailsComponent } from './change-details.component';

describe('ChangeDetailsComponent', () => {
  let component: ChangeDetailsComponent;
  let fixture: ComponentFixture<ChangeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDetailsComponent]
    });
    fixture = TestBed.createComponent(ChangeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
