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
  searchTerm: string = '';
  notFoundMessage: string = '';

  constructor(private _authorService: AuthorsService, private router: Router) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this._authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
      this.notFoundMessage = ''; // Clear notFoundMessage when loading all authors
    });
  }

  redirectToAuthorDetails(id: number): void {
    this.router.navigate(['author-details', id]);
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this._authorService.searchAuthors(this.searchTerm).subscribe(authors => {
        this.authors = authors;
        if (authors.length === 0) {
          this.notFoundMessage = 'هذا المؤلف ليس موجود';
        } else {
          this.notFoundMessage = '';
        }
      });
    } else {
      this.loadAuthors();
    }
  }
}
