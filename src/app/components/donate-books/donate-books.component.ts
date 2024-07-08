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
    bookName: new FormControl(null, [Validators.required]),
    imageUrl: new FormControl(null, [Validators.required]),
    authorName: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });

  onSubmit() {
    if (this.donateForm.invalid) {
      this.donateForm.markAllAsTouched();  // Mark all fields as touched to show validation errors
      alert("الرجاء ملء جميع الحقول المطلوبة بشكل صحيح.");

      return;
    }

    console.log(this.donateForm.value);
    this.showSuccessMessage();
  }

  showSuccessMessage() {
    
    const usedBookDto:UsedBookDto ={
      bookName : this.donateForm.value.bookName,
      description:this.donateForm.value.description,
      authorName:this.donateForm.value.authorName,
      imageURL:this.donateForm.value.imageUrl,
    };
    this.service.donateBook(usedBookDto).subscribe({
        next : (res) => {
        
            const modalElement = document.getElementById('successModal');
            if (modalElement) {
            const modal = new Modal(modalElement);
            modal.show();
            
          }

        },
        error : (err) => {
          console.log(err)
        }
      });

   }

  }