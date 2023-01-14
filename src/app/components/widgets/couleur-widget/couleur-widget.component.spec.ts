import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleurWidgetComponent } from './couleur-widget.component';

describe('CouleurWidgetComponent', () => {
  let component: CouleurWidgetComponent;
  let fixture: ComponentFixture<CouleurWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouleurWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouleurWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
