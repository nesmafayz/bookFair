import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterServiceService } from '../../services/register-service.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private _registerService:RegisterServiceService,private Router:Router) {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      Fullname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      location: new FormControl(null, [Validators.required]),
      bio: new FormControl(null, [Validators.required]),
      profileImage: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)
      ]),
      confirmPassword: new FormControl(null, Validators.required)
    }, { validators: this.repasswordMatchValidator });
  }

  // Custom Validator Function
  repasswordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    const formGroup = control as FormGroup;
    const passwordControl = formGroup.get('password');
    const repasswordControl = formGroup.get('confirmPassword');

    if (!passwordControl || !repasswordControl) {
      return null;
    }

    if (passwordControl.value !== repasswordControl.value) {
      repasswordControl.setErrors({ repasswordMatch: 'كلمتان السر غير متطابقتين' });
      return { repasswordMatch: true };
    } else {
      repasswordControl.setErrors(null);
      return null;
    }
  };

  handleRegister(registerForm:FormGroup) {
    if (registerForm.valid) {
      console.log(registerForm.value);

      this._registerService.register(registerForm.value).subscribe({
        next:(res)=>
         {
          if(res.message === 'success')
            {
              this.Router.navigate(['/login']);
            }
         },
         error: (err) => {
          console.error('Registration error:', err);
          if (err.status ===400) {
            console.error('Error details:', err.error);
          }
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
