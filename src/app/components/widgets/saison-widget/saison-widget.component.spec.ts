import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisonWidgetComponent } from './saison-widget.component';

describe('SaisonWidgetComponent', () => {
  let component: SaisonWidgetComponent;
  let fixture: ComponentFixture<SaisonWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisonWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
