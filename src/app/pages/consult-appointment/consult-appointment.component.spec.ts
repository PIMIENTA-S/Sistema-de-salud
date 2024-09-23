import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultAppointmentComponent } from './consult-appointment.component';

describe('ConsultAppointmentComponent', () => {
  let component: ConsultAppointmentComponent;
  let fixture: ComponentFixture<ConsultAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
