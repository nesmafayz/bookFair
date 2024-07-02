import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-donate-books',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donate-books.component.html',
  styleUrl: './donate-books.component.css'
})
export class DonateBooksComponent {
  donateForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
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
    const modalElement = document.getElementById('successModal');
   if (modalElement) {
      const modal = new Modal(modalElement);
     modal.show();
   }
   
   }
  }





