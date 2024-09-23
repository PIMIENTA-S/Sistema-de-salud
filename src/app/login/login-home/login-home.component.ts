import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-home.component.html',
  styles:`
  * 
  {
    font-family: 'FS-Joey', sans-serif;
    font-weight: bold;
  }
  `
})
export class LoginHomeComponent {
  loginForm = this.fb.group({
    id: ['', Validators.required],
    password: ['', Validators.required]

  })

  constructor(private fb: FormBuilder){}

  get id(){
    return this.loginForm.controls['id']
  }

  get password(){
    return this.loginForm.controls['password']
  }

}
