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

  loginUser(){
    const {id, password} = this.loginForm.value;
    this.authService.getUserById(Number(id)).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password){
          sessionStorage.setItem('id', id!.toString());
          //alert('Inicio de sesion exitoso')
          this.router.navigate(['/home']);
        }else{
          // MessageService TO-DO
          alert('Usuario o contraseña incorrecta');
          this.loginForm.reset();
        }
      }
    )
    

  }

}
