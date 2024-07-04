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
  pageNo: number = 1;
  pageSize: number = 8;
  totalPages:number = 1;
  errorMessage: string = '';
  searchTerm: string = '';


  constructor(private _bookService: BooksService, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
    
  }

  loadBooks() {
    return this._bookService.getBooksList(this.pageNo, this.pageSize).subscribe({
      next: (res:any) => {
        console.log(res.items);
          this.books = res.items;
        
      },
      error: (err) => {
        this.errorMessage = 'Error fetching data';
        console.error('Error:', err);
      }
    });
  }
  


  searchBooks() {
    if (this.searchTerm.trim()) {
      this._bookService.searchBooks(this.searchTerm).subscribe({
        next: (res) => {
         
            this.books = res.data;
            console.log(res.data);
        },
        error: (err) => {
          this.errorMessage = 'Error fetching data';
          console.error(err);
        }
      });
    } else {
      this.loadBooks(); // Load all books if search term is empty
    }
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

