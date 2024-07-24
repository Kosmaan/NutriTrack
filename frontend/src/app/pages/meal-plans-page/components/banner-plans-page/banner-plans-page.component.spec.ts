import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPlansPageComponent } from './banner-plans-page.component';

describe('BannerPlansPageComponent', () => {
  let component: BannerPlansPageComponent;
  let fixture: ComponentFixture<BannerPlansPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPlansPageComponent]
    });
    fixture = TestBed.createComponent(BannerPlansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
