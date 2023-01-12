import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleurComponent } from './fleur.component';

describe('FleurComponent', () => {
  let component: FleurComponent;
  let fixture: ComponentFixture<FleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
