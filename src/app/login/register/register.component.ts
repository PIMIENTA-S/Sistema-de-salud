import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { passwordMacthValidator } from '../../directive/password-match.directive';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interface/auth';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
  providers: [],
  templateUrl: './register.component.html',
  styles:``
})
export class RegisterComponent {
  registerForm = this.fb.group({
    // se verifica que el nombre sea correcto es decir no hayan numeros
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    id: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  },
  {
    validators: passwordMacthValidator
  }
)
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router,
  ){}


  get fullName(){
    return this.registerForm.controls['fullName']
  }

  get id(){
    return this.registerForm.controls['id']
  }

  get password(){
    return this.registerForm.controls['password']
  }

  get confirmPassword(){
    return this.registerForm.controls['confirmPassword']
  }

  submitDetails(){
    const postData = {...this.registerForm.value}
    delete postData.confirmPassword;

    this.authService.registerUser(postData as User).subscribe(
      reponse => {
        // console.log(reponse);
        alert("Registrado correctamente")
        //this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registrado correctamente' });
        this.router.navigate(['login'])
      },
      error => {
        alert('Ha ocurrido un error')
        //this.messageService.add({ severity: 'error', summary: 'Error', detail: '' });
      }
      
    )
    
  }
}

