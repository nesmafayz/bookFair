import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../../services/authors.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author: any;

  constructor(private route: ActivatedRoute, private _authorService: AuthorsService) {}

  ngOnInit(): void {
    const authorId = +this.route.snapshot.paramMap.get('id')!;
    this._authorService.getAuthorById(authorId).subscribe(author => {
      console.log(author);  // Log the author object to verify its structure
      this.author = author;
    });
  }
}
