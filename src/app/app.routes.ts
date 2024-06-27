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
import { DonateBooksComponent } from './components/donate-books/donate-books.component';

import { LogoutComponent } from './layout/components/logout/logout.component';
import { BookDetailsComponent } from './components/bookstore/book-details/book-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';

export const routes: Routes = [
    {path:'', redirectTo:'Home' , pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Bookstore', component: BookstoreComponent},
    {path:'Publisher', component: PublishersComponent},
    {path:'Donation', component: DonationComponent},
    {path:'MapGuide', component: MapGuideComponent},
    {path:'Login', component: LoginComponent},
    {path:'Register', component:RegisterComponent},
    {path:'Visitors', component:VisitorsComponent},
    {path:'Transports',component:TransportsComponent},
    {path:'bookingTicket', component:BookingComponent},
    {path:'donate-books',component:DonateBooksComponent},
    {path:'**', component:NotFoundComponent},
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Bookstore', component: BookstoreComponent },
    { path: 'book-details/:id', component: BookDetailsComponent },
    {path:'favorites',component:FavoritesComponent},
    {path:'cart',component:CartComponent},
    {path:'payment',component:PaymentComponent},
    { path: 'Publisher', component: PublishersComponent },
    { path: 'Donation', component: DonationComponent },
    { path: 'MapGuide', component: MapGuideComponent },
    { path: 'Login', component: LoginComponent },
     { path: 'Logout', component: LogoutComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'Visitors', component: VisitorsComponent },
    { path: 'Transports', component: TransportsComponent },
    { path: 'bookingTicket', component: BookingComponent },
    { path: '**', component: NotFoundComponent }

];
