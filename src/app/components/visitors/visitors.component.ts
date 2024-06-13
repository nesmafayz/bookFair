import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MapMarker } from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxCountAnimationModule } from 'ngx-count-animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [RouterLink,MapMarker,GoogleMapsModule,NgxCountAnimationModule ],
  templateUrl: './visitors.component.html',
  styleUrl: './visitors.component.css'
})
export class VisitorsComponent implements OnInit {

  center: google.maps.LatLngLiteral = { lat: 30.05611, lng: 31.33078 };
  zoom: number = 15;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToBooking() {
    this.router.navigate(['/bookingTicket']);
}




}
