import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)
      ]),
      repassword: new FormControl(null, Validators.required)
    }, { validator: this.repasswordMatch });
  }

  repasswordMatch(form: FormGroup) {
    const passwordControl = form.get('password');
    const repasswordControl = form.get('repassword');

    if (passwordControl?.value === repasswordControl?.value) {
      return null;
    } else {
      repasswordControl?.setErrors({ repasswordMatch: 'كلمتان السر غير متطابقتين' });
      return { repasswordMatch: 'كلمتان السر غير متطابقتين' };
    }
  }

  handleRegister(registerForm:FormGroup)
  {
      console.log(registerForm.value);
  }

}
