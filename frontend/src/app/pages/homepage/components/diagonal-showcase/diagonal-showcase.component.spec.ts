import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonalShowcaseComponent } from './diagonal-showcase.component';

describe('DiagonalShowcaseComponent', () => {
  let component: DiagonalShowcaseComponent;
  let fixture: ComponentFixture<DiagonalShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagonalShowcaseComponent]
    });
    fixture = TestBed.createComponent(DiagonalShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
