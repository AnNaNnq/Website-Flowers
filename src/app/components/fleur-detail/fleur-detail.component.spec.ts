import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleurDetailComponent } from './fleur-detail.component';

describe('FleurDetailComponent', () => {
  let component: FleurDetailComponent;
  let fixture: ComponentFixture<FleurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleurDetailComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FleurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
