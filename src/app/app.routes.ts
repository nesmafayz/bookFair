// app-routing.module.ts or your routing module file
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
import { AuthorComponent } from './components/author/author.component';
import { AuthorDetailsComponent } from './components/author/author-details/author-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CartComponent } from './components/cart/cart.component';
import { ReviewComponent } from './components/review/review.component';
import { BooksRelatedToPublisherComponent } from './components/books-related-to-publisher/books-related-to-publisher.component';
import { DonateBooksListComponent } from './components/donate-books-list/donate-books-list.component';
import { AuthGuard } from './guards/auth.guard'; 

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Bookstore', component: BookstoreComponent, canActivate: [AuthGuard] },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'books-related/:id', component: BooksRelatedToPublisherComponent },
  { path: 'Author', component: AuthorComponent },
  { path: 'author-details/:id', component: AuthorDetailsComponent },
  { path: 'Publisher', component: PublishersComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'Donation', component: DonationComponent, canActivate: [AuthGuard] },
  { path: 'MapGuide', component: MapGuideComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Logout', component: LogoutComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Visitors', component: VisitorsComponent },
  { path: 'Transports', component: TransportsComponent },
  { path: 'bookingTicket', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'donate-books', component: DonateBooksComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'donate-books-list', component: DonateBooksListComponent },
  { path: '**', component: NotFoundComponent }
];
