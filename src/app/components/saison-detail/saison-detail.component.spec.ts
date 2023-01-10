import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisonDetailComponent } from './saison-detail.component';

describe('SaisonDetailComponent', () => {
  let component: SaisonDetailComponent;
  let fixture: ComponentFixture<SaisonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisonDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
