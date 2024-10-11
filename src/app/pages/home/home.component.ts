import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styles:``
})
export class HomeComponent {

  newsItem = [
    {img: 'assets/img/niña.jpg', alt:'Noticia 1', title:'Nueva Apertura en Nuestra Red de Centros', resumen: 'Nos complace anunciar la apertura de un nuevo centro de atención médica en la ciudad.'},
    {img: 'assets/img/covid.jpg', alt:'Noticia 2', title:'Campaña de Salud Preventiva', resumen: 'Participa en nuestra campaña de vacunación contra la gripe y cuida tu salud.'},
    {img: 'assets/img/citas.jpg', alt:'Noticia 3', title:'Programa de Salud Mental', resumen: 'Conoce nuestro nuevo programa de apoyo para la salud mental en tiempos de pandemia.'},
  ];

  serviceItem = [
    {title: 'Atención Médica General', body: 'Ofrecemos consultas médicas para cuidar tu salud.'},
    {title: 'Laboratorios Clínicos', body: 'Pruebas y exámenes clínicos realizados por profesionales.'},
    {title: 'Atención de Urgencias', body: 'Estamos disponibles 24/7 para emergencias.'},

  ];

  faqsItem = [
    {qs: '¿Cómo puedo agendar una cita médica?', response: 'Puedes agendar tu cita a través de nuestro portal en la sección de "Consultas". Solo necesitas ingresar a tu cuenta, seleccionar el tipo de consulta que deseas y elegir la fecha disponible que más te convenga. Si tienes alguna duda, nuestro equipo de soporte está disponible para asistirte.'},
    {qs: '¿Qué documentos necesito para afiliarme?', response: 'Necesitas cédula de identidad, comprobante de domicilio y un documento laboral. Estos requisitos aseguran que puedas acceder a todos nuestros servicios médicos sin problemas. El proceso de afiliación es sencillo y puedes completarlo en línea en pocos minutos.'},
    {qs: '¿Puedo consultar mi historial médico en línea?', response: 'Sí, accede a tu historial médico desde la sección de "Consultas". Nuestro sistema te permite revisar tu historial de manera segura y en cualquier momento, así como descargar informes médicos. Toda tu información está protegida bajo estrictos estándares de privacidad.'},
    {qs: '¿Cómo puedo actualizar mis datos personales?', response: 'Accede a tu cuenta, selecciona la opción "Perfil" y modifica tus datos personales. Es importante mantener esta información actualizada para recibir notificaciones importantes y acceder a los servicios adecuados en función de tus necesidades de salud.'}
  ]

  
  @ViewChild('servicios') serviciosSection!: ElementRef;

  scrollToServices() {
    this.serviciosSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


}
