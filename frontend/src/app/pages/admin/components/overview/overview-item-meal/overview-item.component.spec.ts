import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewItemComponent } from './overview-item.component';

describe('OverviewItemComponent', () => {
  let component: OverviewItemComponent;
  let fixture: ComponentFixture<OverviewItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewItemComponent]
    });
    fixture = TestBed.createComponent(OverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
