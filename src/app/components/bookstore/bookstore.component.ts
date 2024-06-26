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
  pageNo: number = 1;
  pageSize: number = 8;
  totalPages:number = 1;
  errorMessage: string = '';


  constructor(private _bookService: BooksService, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
    
  }

  loadBooks()
  {
    return this._bookService.getBooksList(this.pageNo, this.pageSize).subscribe({
      next: (res) => {
        if (res.succeeded) {
          this.books = res.data;
          this.totalPages = res.paginationInfo.totalPages;
          console.log(res.data);
        } else {
          this.errorMessage = res.message;
        }
      },
      error: (err) => {
        this.errorMessage = 'Error fetching data';
        console.error(err);
      }
    });
  }


  onPageChange(page: number): void {
    this.pageNo = page;
    this.loadBooks();
  }
  
  redirectToBookDetails(id: number): void {
    this.router.navigate(['/book-details', id]);
  }
}