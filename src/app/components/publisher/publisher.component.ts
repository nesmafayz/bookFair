import { Component, OnInit } from '@angular/core';
import { PublishersService } from '../../services/publishers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publishers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.css'
})
export class PublishersComponent implements OnInit {
  publishers: any[] = [];
  selectedPublisher: any = null;

  constructor(private _publishersService: PublishersService) {}

  ngOnInit(): void {
    this.publishers = this._publishersService.getPublishers();
  }
  onSelect(publisher: any): void {
    this.selectedPublisher = this.selectedPublisher === publisher ? null : publisher;
  }
}
