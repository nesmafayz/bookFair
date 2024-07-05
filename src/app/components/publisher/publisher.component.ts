import { Component, OnInit } from '@angular/core';
import { PublishersService } from '../../services/publishers.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publishers',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublishersComponent implements OnInit {
  publishers: any[] = [];
  filteredPublishers: any[] = [];
  pageNo: number = 1;
  pageSize: number = 8;
  totalPages: number = 1;
  errorMessage: string = '';
  searchTerm: string = '';

  constructor(private _publisherService: PublishersService, private router: Router) { }

  ngOnInit() {
    this.loadPublishers();
  }

  loadPublishers() {
    this._publisherService.getPublisherList(this.pageNo, this.pageSize).subscribe({
      next: (res: any) => {
        this.publishers = res.items;
        this.totalPages = res.totalPages;
        this.filteredPublishers = this.publishers;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching data';
        console.error('Error:', err);
      }
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredPublishers = this.publishers;
      return;
    }

    this.filteredPublishers = this.publishers.filter(publisher =>
      publisher.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  onPageChange(page: number): void {
    this.pageNo = page;
    this.loadPublishers();
  }

  redirectToBookDetails(id: number): void {
    if (id !== undefined && id !== null) {
      this.router.navigate(['/book-details', id]);
    } else {
      console.error('Invalid book id:', id);
    }
  }
}
