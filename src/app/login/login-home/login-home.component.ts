import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-home.component.html',
  styles:``
})
export class LoginHomeComponent {
  loginForm = this.fb.group({
    id: ['', Validators.required],
    password: ['', Validators.required]

  })

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ){}

  get id(){
    return this.loginForm.controls['id']
  }

  get password(){
    return this.loginForm.controls['password']
  }

  loginUser() {
    const {id, password} = this.loginForm.value;
    
    // Convertimos el ID a número si es necesario
    this.authService.getUserById(Number(id)).subscribe(
      response => {
        if (response) {
          if (response.password === password) {
            // Guardamos el ID en la sesión y redirigimos al home
            sessionStorage.setItem('id', id!.toString());
            this.router.navigate(['/home']);
          } else {
            // Contraseña incorrecta
            alert('Usuario o contraseña incorrecta');
            this.loginForm.reset();
          }
        } else {
          // Usuario no encontrado
          alert('Usuario no encontrado');
          this.loginForm.reset();
        }
      },
      error => {
        // Manejo de errores HTTP
        console.error('Error al intentar autenticar el usuario', error);
        alert('Hubo un problema al intentar iniciar sesión. Inténtalo de nuevo más tarde.');
      }
    );
  }
  

}
