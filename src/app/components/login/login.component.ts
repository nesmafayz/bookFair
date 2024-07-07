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
      const { email, password } = this.loginForm.value;
  
      this.authService.login(email, password).subscribe(
        {
          next : (res) => {
            console.log(res)
            if(res.token)
            {
              localStorage.setItem("token" , res.token);
              this.router.navigate(['/Home']);
            }
           
          },
          error : (err) => {
            console.log(err)
          }
        }
        // success => {
        //   if (success) {

        //     // Navigate to Home upon successful login
        //     this.router.navigate(['/Home']);
        //   } else {
        //     // Handle unauthorized access here if needed
        //     console.log('Unauthorized access');
        //     this.errorMessage = 'Unauthorized access'; // Display error message
        //   }
        // },
        // error => {
        //   console.error('Login error:', error);
        //   this.errorMessage = 'An error occurred during login.';
        // }
      );
      // Log form data to console
      console.log('Login form data:', { email, password });
    }
  }

  // Getter to easily access form controls
  get formControls() {
    return this.loginForm.controls;
  }
}
