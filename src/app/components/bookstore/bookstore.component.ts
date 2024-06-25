import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookstore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookstore.component.html',
  styleUrl: './bookstore.component.css'
})
export class BookstoreComponent implements OnInit {
 books: any[] = [];

  constructor(private _bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.books = this._bookService.getBooks();
  }

  redirectToBookDetails(id: number): void {
    this.router.navigate(['/book-details', id]);
  }
}