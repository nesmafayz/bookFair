import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { NavComponent } from './layout/components/nav/nav.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,FooterComponent,HomeComponent,PublisherComponent,CommonModule,RouterModule,GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookFair';
}
