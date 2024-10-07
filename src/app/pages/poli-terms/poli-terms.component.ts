import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poli-terms',
  standalone: true,
  imports: [FooterComponent,CommonModule],
  templateUrl: './poli-terms.component.html',
  styles: ``
})
export class PoliTermsComponent {

  politicas = [
    {
      title: '1. Introducción',
      resume: 'En Septi-Salud, nos tomamos muy en serio la privacidad de nuestros usuarios y nos comprometemos a proteger la información personal que recolectamos. Esta política de privacidad describe cómo recopilamos, usamos, compartimos y protegemos su información.'
    },
    {
      title: '2. Información Recopilada',
      resume: 'Cuando utiliza nuestros servicios, podemos recopilar varios tipos de información, tales como:',
      items: [
        'Información personal (nombre, dirección, correo electrónico, número de teléfono).',
        'Información de salud en el contexto de nuestros servicios médicos.',
        'Información de uso del sitio web, a través de cookies y tecnologías similares.'
      ]
    },
    {
      title: '3. Uso de la Información',
      resume: 'La información que recopilamos se utiliza para:',
      items: [
        'Proveer y mejorar nuestros servicios de salud.',
        'Procesar sus solicitudes y responder a sus consultas.',
        'Enviar información relevante sobre nuestros servicios y novedades.',
        'Cumplir con las obligaciones legales y regulatorias.'
      ]
    },
    {
      title: '4. Compartición de Información',
      resume: 'No compartimos su información personal con terceros, excepto en los siguientes casos:',
      items: [
        'Con proveedores de servicios que nos ayudan a operar la plataforma.',
        'Cuando es necesario cumplir con la ley o proteger los derechos, propiedad o seguridad de Septi-Salud o de nuestros usuarios.'
      ]
    },
    {
      title: '5. Seguridad de la Información',
      resume: 'Nos comprometemos a proteger su información mediante medidas de seguridad técnicas y organizativas. Sin embargo, debido a la naturaleza de las tecnologías digitales, no podemos garantizar la seguridad absoluta de la información transmitida en línea.'
    },
    {
      title: '6. Derechos del Usuario',
      resume: 'Usted tiene derecho a:',
      items: [
        'Acceder a su información personal.',
        'Corregir cualquier información incorrecta.',
        'Solicitar la eliminación de su información personal, cuando sea aplicable.'
      ]
    },
    {
      title: '7. Cambios a esta Política',
      resume: 'Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. Cualquier cambio será comunicado a través de nuestro sitio web.'
    }
  ];


  terminos = [
    {
      title: '1. Aceptación de los Términos',
      resume: 'Al acceder y utilizar el sitio web Septi-Salud, usted acepta los presentes Términos de Servicio. Si no está de acuerdo, le solicitamos que no use nuestro sitio ni nuestros servicios.'
    },
    {
      title: '2. Descripción del Servicio',
      resume: 'Septi-Salud ofrece servicios relacionados con la atención médica, incluyendo consultas y recursos de salud en línea. El uso de los servicios está sujeto a los términos aquí mencionados.'
    },
    {
      title: '3. Uso Aceptable',
      items: [
        'No utilizar el sitio web para ningún propósito ilegal.',
        'No intentar acceder a áreas restringidas o protegidas del sitio.',
        'No alterar ni interferir con el funcionamiento de nuestros servicios.'
      ]
    },
    {
      title: '4. Propiedad Intelectual',
      resume: 'Todos los contenidos del sitio web, incluyendo textos, imágenes, gráficos y logotipos, son propiedad de Septi-Salud o de terceros que han licenciado su uso. No está permitido reproducir, distribuir o modificar estos contenidos sin previa autorización.'
    },
    {
      title: '5. Limitación de Responsabilidad',
      resume: 'Los servicios proporcionados por Septi-Salud se ofrecen "tal como están". No garantizamos la disponibilidad continua del sitio ni la precisión de la información proporcionada. No somos responsables por daños directos o indirectos que puedan derivarse del uso de nuestros servicios.'
    },
    {
      title: '6. Modificaciones a los Términos',
      resume: 'Nos reservamos el derecho a modificar estos términos en cualquier momento. Los cambios serán efectivos a partir de su publicación en el sitio web.'
    },
    {
      title: '7. Jurisdicción',
      resume: 'Estos términos se regirán por las leyes de Colombia. Cualquier disputa relacionada con el uso de nuestros servicios será sometida a la jurisdicción de los tribunales competentes en Colombia.'
    }
  ];

}
