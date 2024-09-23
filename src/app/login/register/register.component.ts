import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styles:`
  * 
  {
    font-family: 'FS-Joey', sans-serif;
    font-weight: bold;
  }
  `
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    id: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]

  })

  constructor(private fb: FormBuilder){}

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

}
