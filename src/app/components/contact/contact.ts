import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { ContactDetails } from '../../models/portfolio.model';
import { LucideAngularModule, Send, CheckCircle, XCircle } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {

  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) {}

  readonly Send = Send;
  readonly CheckCircle = CheckCircle;
  readonly XCircle = XCircle;

  isClickable = true;
  copied = false;
  contact!: ContactDetails;

  // button states
  sending = false;
  sent = false;
  failed = false;

  // toast states
  toastVisible = false;
  toastError = false;
  toastMessage = '';

  formData = {
    name: '',
    email: '',
    message: ''
  };

  private formspreeUrl = 'https://formspree.io/f/xwvwyqoq';

  ngOnInit(): void {
    this.contact = this.portfolioService.getContacts();
  }

  onSubmit(): void {
    this.sending = true;
    this.sent = false;
    this.failed = false;

    fetch(this.formspreeUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.formData)
    })
    .then(response => {
      this.sending = false;
      if (response.ok) {
        this.sent = true;
        this.formData = { name: '', email: '', message: '' };
        this.showToast(false, 'Your message is on its way!');
        // reset button after 3s
        setTimeout(() => { this.sent = false; this.cdr.detectChanges(); }, 3000);
      } else {
        this.failed = true;
        this.showToast(true, 'Something went wrong. Try again.');
        setTimeout(() => { this.failed = false; this.cdr.detectChanges(); }, 3000);
      }
      this.cdr.detectChanges();
    })
    .catch(error => {
      console.error('Error:', error);
      this.sending = false;
      this.failed = true;
      this.showToast(true, 'Network error. Please try again.');
      setTimeout(() => { this.failed = false; this.cdr.detectChanges(); }, 3000);
      this.cdr.detectChanges();
    });
  }

  private showToast(isError: boolean, message: string): void {
    this.toastError = isError;
    this.toastMessage = message;
    this.toastVisible = true;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.toastVisible = false;
      this.cdr.detectChanges();
    }, 4000);
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.contact.email).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }
}