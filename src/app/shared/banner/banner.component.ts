import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styles: ``
})
export class BannerComponent {
  
  visible: boolean = true;

  toogle(){
    this.visible = !this.visible;
  }

}
