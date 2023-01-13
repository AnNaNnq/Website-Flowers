import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpAndDownWidgetComponent } from './up-and-down-widget.component';

describe('UpAndDownWidgetComponent', () => {
  let component: UpAndDownWidgetComponent;
  let fixture: ComponentFixture<UpAndDownWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpAndDownWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpAndDownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
