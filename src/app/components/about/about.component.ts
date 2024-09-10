import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name: string = 'Omar Rodriguez';
  descripcion: string = 'Desarrollador web con experiencia en front-end y back-end, especializado en Angular, Codeigneiter (PHP) y mas tecnologías.'
}
