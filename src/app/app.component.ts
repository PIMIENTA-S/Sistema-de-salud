import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BtnCatComponent } from './shared/btn-cat/btn-cat.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './shared/banner/banner.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, BtnCatComponent, CommonModule, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema-salud';

  isMenuOpen = false;

  constructor(private router: Router){}

  logOut(){
    sessionStorage.clear()
    this.router.navigate(['login']);
  }

}
