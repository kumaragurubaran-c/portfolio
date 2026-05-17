import { Component, OnInit, OnDestroy,ChangeDetectorRef, NgZone  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe implements OnDestroy, OnInit {

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  tags = ['Angular', 'Spring Boot', 'Microservices','Kafka', 'Azure', 'Git-lab'];
  typedText = '';
  private phrases = ['Scalable Systems', 'Cloud Solutions', 'Event-Driven Apps', 'Clean Architectures'];
  private phraseIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => this.typeNext());

    this.typeNext();
  }

  private typeNext(): void {
    const current = this.phrases[this.phraseIndex];

    if (!this.deleting && this.charIndex <= current.length) {
      this.typedText = current.slice(0, this.charIndex++);
      this.cdr.detectChanges();
      this.timerId = setTimeout(() => this.typeNext(), 120);
    } else if (!this.deleting && this.charIndex > current.length) {
      this.deleting = true;
      this.timerId = setTimeout(() => this.typeNext(), 2500);
    } else if (this.deleting && this.charIndex > 0) {
      this.typedText = current.slice(0, --this.charIndex);
      this.timerId = setTimeout(() => this.typeNext(), 60);
    } else {
      this.deleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.timerId = setTimeout(() => this.typeNext(), 500);
    }
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

}
