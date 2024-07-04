// import { Component, OnInit } from '@angular/core';
// import { BooksService } from '../../services/books.service';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-bookstore',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './bookstore.component.html',
//   styleUrl: './bookstore.component.css'
// })
// export class BookstoreComponent implements OnInit {
//  books: any[] = [];

//   constructor(private _bookService: BooksService, private router: Router) { }

//   ngOnInit(): void {
//     this.books = this._bookService.getBooks();
//   }

//   redirectToBookDetails(id: number): void {
//     this.router.navigate(['/book-details', id]);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookstore',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  pageNo: number = 1;
  pageSize: number = 8;
  totalPages: number = 1;
  errorMessage: string = '';
  searchTerm: string = '';

  constructor(private _bookService: BooksService, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this._bookService.getBooksList(this.pageNo, this.pageSize).subscribe({
      next: (res: any) => {
        this.books = res.items;
        this.totalPages = res.totalPages;
        this.filteredBooks = this.books; // Initialize filteredBooks
      },
      error: (err) => {
        this.errorMessage = 'Error fetching data';
        console.error('Error:', err);
      }
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredBooks = this.books;
      return;
    }

    this.filteredBooks = this.books.filter(book =>
      book.bookName.toLowerCase().includes(text.toLowerCase())
    );
  }

  onPageChange(page: number): void {
    this.pageNo = page;
    this.loadBooks();
  }

  redirectToBookDetails(id: number): void {
    if (id !== undefined && id !== null) {
      this.router.navigate(['/book-details', id]);
    } else {
      console.error('Invalid book id:', id);
    }
  }
}
