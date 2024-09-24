import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consult-appointment.component.html',
  styleUrl: './consult-appointment.component.css'
})
export class ConsultAppointmentComponent {
  appointmentType: 'presencial' | 'virtual' = 'presencial';
  appointmentList = [
    { type: 'Optometría', availability: 'Disponible' },
    { type: 'Oncólogo', availability: 'Disponible' },
    { type: 'Pediatra', availability: 'Disponible' },
    { type: 'Odontología', availability: 'No disponible' },
    { type: 'Cardiólogo', availability: 'Disponible' }
  ];

  setAppointmentType(type: 'presencial' | 'virtual') {
    this.appointmentType = type;
    // You can load different data based on the appointment type
  }

  bookAppointment(appointment: any) {
    alert(`Cita reservada para: ${appointment.type}`);
  }

}
