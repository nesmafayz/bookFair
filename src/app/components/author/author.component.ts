import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';
import { AuthorsService } from '../../services/authors.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to imports
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: any[] = [];
  filteredAuthors: any[] = [];
  searchTerm: string = '';
  notFoundMessage: string = '';

  currentPage: number = 1;
  pageSize: number = 12;

  constructor(private _authorService: AuthorsService, private router: Router) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this._authorService.getAuthorsWithPagination(this.currentPage, this.pageSize)
      .subscribe(authors => {
        this.authors = authors;
        this.filteredAuthors = authors;
        this.notFoundMessage = ''; // Clear notFoundMessage when loading authors
      });
  }

  redirectToAuthorDetails(id: number): void {
    this.router.navigate(['author-details', id]);
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredAuthors = this.authors;
      return;
    }

    this.filteredAuthors = this.authors.filter(author =>
      author.name.toLowerCase().includes(text.toLowerCase())
    );

    this.notFoundMessage = this.filteredAuthors.length === 0 ? '' : '';
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadAuthors(); // Reload authors for the new page
  }
}
