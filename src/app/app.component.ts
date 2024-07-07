import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { NavComponent } from './layout/components/nav/nav.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {  PublishersComponent } from './components/publisher/publisher.component';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/interceptors/http-interceptor.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,FooterComponent,HomeComponent,PublishersComponent,CommonModule,RouterModule,GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class AppComponent {
  title = 'bookFair';
}
