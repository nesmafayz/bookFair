import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { DonationComponent } from './components/donation/donation.component';
import { MapGuideComponent } from './components/map-guide/map-guide.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { TransportsComponent } from './components/transports/transports.component';
import { BookingComponent } from './components/booking/booking.component';
import { PublishersComponent } from './components/publisher/publisher.component';
import { LogoutComponent } from './logout/logout.component';


export const routes: Routes = [
    {path:'', redirectTo:'Home' , pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Bookstore', component: BookstoreComponent},
    {path:'Publisher', component: PublishersComponent},
    {path:'Donation', component: DonationComponent},
    {path:'MapGuide', component: MapGuideComponent},
    {path:'Login', component: LoginComponent},
    {path:'Logout', component:LogoutComponent },
    {path:'Register', component:RegisterComponent},
    {path:'Visitors', component:VisitorsComponent},
    {path:'Transports',component:TransportsComponent},
    {path:'bookingTicket', component:BookingComponent},
    {path:'**', component:NotFoundComponent}

];
