import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-donate-books',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donate-books.component.html',
  styleUrl: './donate-books.component.css'
})
export class DonateBooksComponent {
  donateForm:FormGroup = new FormGroup({
    name:new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email:new FormControl(null, [Validators.required, Validators.email]),
    bookAddress:new FormControl(null, [Validators.required]),
    authorName :new FormControl(null, [Validators.required]),
    bookCondition:new FormControl(null, [Validators.required])
  })
  onSubmit(donateForm:FormGroup) {
    debugger;
    console.log(donateForm);
    
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
