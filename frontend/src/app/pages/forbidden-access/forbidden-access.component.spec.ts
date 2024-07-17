import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenAccessComponent } from './forbidden-access.component';

describe('ForbiddenAccessComponent', () => {
  let component: ForbiddenAccessComponent;
  let fixture: ComponentFixture<ForbiddenAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForbiddenAccessComponent]
    });
    fixture = TestBed.createComponent(ForbiddenAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
