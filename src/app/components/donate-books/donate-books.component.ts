import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';
import { DonationService } from '../../services/donation.service';
import { UsedBookDto } from '../../../models/used-book-dto';


@Component({
  selector: 'app-donate-books',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donate-books.component.html',
  styleUrl: './donate-books.component.css'
})
export class DonateBooksComponent {


constructor(
  private service:DonationService,
) {}



  donateForm: FormGroup = new FormGroup({
    bookAddress: new FormControl(null, [Validators.required]),
    authorName: new FormControl(null, [Validators.required]),
    bookName: new FormControl(null, [Validators.required])
  });

  onSubmit() {
    debugger;
    if (this.donateForm.invalid) {
      this.donateForm.markAllAsTouched();  // Mark all fields as touched to show validation errors
      alert("الرجاء ملء جميع الحقول المطلوبة بشكل صحيح.");
      
      return;
    }
   
    console.log(this.donateForm.value);
    this.showSuccessMessage();
  }

  showSuccessMessage() {
    debugger;
    const usedBookDto:UsedBookDto ={
      bookName : this.donateForm.value.bookName,
      authorName:this.donateForm.value.authorName,
      imageURL:this.donateForm.value.bookAddress
    };
this.service.donateBook(usedBookDto).subscribe(res=>{
  const modalElement = document.getElementById('successModal');
  if (modalElement) {
     const modal = new Modal(modalElement);
    modal.show();
  }
});
   
   
   }
  }







  