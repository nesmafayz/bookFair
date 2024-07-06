import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DonationService } from '../../services/donation.service';
@Component({
  selector: 'app-donate-books-list',
  standalone: true,
  imports: [NgFor] ,
  templateUrl: './donate-books-list.component.html',
  styleUrl: './donate-books-list.component.css'
})
export class DonateBooksListComponent {
  donatedBooks:any[] = [];
  // donatedBooks = [
  //   {
  //     bookName: 'كتاب 1',
  //     authorName: 'المؤلف 1',
  //     donorName: 'المتبرع 1',
  //     bookImage: 'assets/images/sale.png'
  //   },
  //   {
  //     bookName: 'كتاب 2',
  //     authorName: 'المؤلف 2',
  //     donorName: 'المتبرع 2',
  //     bookImage: 'assets/images/sale.png'
  //   },
   
  // ];

  constructor(
   private service : DonationService
  ) { }

  ngOnInit(): void {
    debugger;
    const pageNo = 1;
    const pageSize = 10;
    const include = ['author', 'publisher'];
    this.service.GetPaginatedBooks(pageNo,pageSize,include).subscribe(res =>{
    if(res){
      debugger;
      const donators = res.items;
      this.donatedBooks = donators;
    }
    });
  }

  
}