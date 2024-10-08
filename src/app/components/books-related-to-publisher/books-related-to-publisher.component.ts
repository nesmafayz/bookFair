import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-related-to-publisher',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './books-related-to-publisher.component.html',
  styleUrl: './books-related-to-publisher.component.css'
})
export class BooksRelatedToPublisherComponent implements OnInit{

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
