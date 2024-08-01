import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintsItemComponent } from './hints-item.component';

describe('HintsItemComponent', () => {
  let component: HintsItemComponent;
  let fixture: ComponentFixture<HintsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HintsItemComponent]
    });
    fixture = TestBed.createComponent(HintsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
