import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHeaderComponent } from './auth-header.component';

describe('AuthHeaderComponent', () => {
  let component: AuthHeaderComponent;
  let fixture: ComponentFixture<AuthHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthHeaderComponent]
    });
    fixture = TestBed.createComponent(AuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
