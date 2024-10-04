import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        {
          next : (res) => {
            console.log(res)
            if(res && res.token)
            {
              localStorage.setItem("token" , res.token);
              this.router.navigate(['/Home']);
            }
            else {
              this.errorMessage = 'Invalid email or password';
            }
          },
          error : (err) => {
            console.log(err)
            this.errorMessage = 'An error occurred during login.';
          }
        }
      );
    }
  }

  // Getter to easily access form controls
  get formControls() {
    return this.loginForm.controls;
  }
}