import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../../services/authors.service';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [],
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author: any;

  constructor(private route: ActivatedRoute, private _authorService: AuthorsService) {}

  ngOnInit(): void {
    const authorId = +this.route.snapshot.paramMap.get('id')!;
    this._authorService.getAuthorById(authorId).subscribe(author => {
      this.author = author;
    });
  }
}
