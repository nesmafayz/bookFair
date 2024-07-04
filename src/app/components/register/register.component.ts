import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterServiceService } from '../../services/register-service.service';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  
})
export class RegisterComponent {
  registerForm: FormGroup;
  imagePreviewUrl: string = 'https://media.istockphoto.com/id/1341346982/photo/happy-child-with-goggles-holding-a-blue-book.jpg?s=612x612&w=0&k=20&c=K_noVHLsHBSuLd84rLMGrWabFOBjDbUm0_CH7BfARPs=';


  constructor(private _registerService: RegisterServiceService, private Router: Router, private authService: SocialAuthService) {


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

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreviewUrl = reader.result as string;
        this.registerForm.patchValue({ profileImage: file });
        this.registerForm.get('profileImage')?.updateValueAndValidity();
      };

      reader.readAsDataURL(file);
    }
  }

  handleRegister(registerForm: FormGroup) {
    if (registerForm.valid) {
      console.log(registerForm.value);

      this._registerService.register(registerForm.value).subscribe({
        next: (res) => {
          Swal.fire({
            title: "تم بنجاح",
            text: "لقد تم انشاء حسابك بنجاح",
            icon: "success"
          });
          if (res.message === 'success') {
            this.Router.navigate(['/login']);
          }
        },
        error: (err) => {
          console.error('Registration error:', err);
          if (err.status === 400) {
            Swal.fire({
              title: "فشل",
              text: "فشل في انشاء الحساب",
              icon: "error"
            });
            console.error('Error details:', err.error);
          }
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
