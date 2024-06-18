import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required]),
  })


  handleRegister(registerForm:FormGroup)
  {
      console.log(registerForm);
  }

}
