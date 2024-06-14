import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { DonationComponent } from './components/donation/donation.component';
import { MapGuideComponent } from './components/map-guide/map-guide.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { TransportsComponent } from './components/transports/transports.component';
import { BookingComponent } from './components/booking/booking.component';


export const routes: Routes = [
    {path:'', redirectTo:'Home' , pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Publisher', component:PublisherComponent},
    {path:'Bookstore', component: BookstoreComponent},
    {path:'Publisher', component: PublisherComponent},
    {path:'Donation', component: DonationComponent},
    {path:'MapGuide', component: MapGuideComponent},
    {path:'Login', component: LoginComponent},
    {path:'Register', component:RegisterComponent},
    {path:'Visitors', component:VisitorsComponent},
    {path:'Transports',component:TransportsComponent},
    {path:'bookingTicket', component:BookingComponent},
    {path:'**', component:NotFoundComponent}

];
