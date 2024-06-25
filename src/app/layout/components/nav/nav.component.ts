import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  logoUrl: string = '/bookFair/src/assets/images/logo.png'; 
  isUserLogged: boolean = false;

  constructor(private authService: AuthService) {
    this.isUserLogged = this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.isUserLogged = false;
  }
}

