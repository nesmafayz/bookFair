import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: any[] = [];

  constructor(private _authorService: AuthorsService, private router: Router) { }

  ngOnInit(): void {
    this.authors = this._authorService.getAuthors();
  }

  redirectToAuthorDetails(id: number): void {
    this.router.navigate(['/author-details', id]);
  }
}
