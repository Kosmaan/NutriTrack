import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsShowcaseComponent } from './tools-showcase.component';

describe('ToolsShowcaseComponent', () => {
  let component: ToolsShowcaseComponent;
  let fixture: ComponentFixture<ToolsShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsShowcaseComponent]
    });
    fixture = TestBed.createComponent(ToolsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
