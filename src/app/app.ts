import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from "./components/skills/skills";
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { LucideAngularModule, CircleUserRound, CodeXml, Layers, Mail } from 'lucide-angular';
import { Sidenav } from './components/sidenav/sidenav';


export class AppComponent {
  readonly CircleUserRound = CircleUserRound;
  readonly CodeXml = CodeXml;
  readonly Layers = Layers;
  readonly Mail = Mail;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMe, Skills, Projects, Contact, Sidenav, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) { }
  readonly CircleUserRound = CircleUserRound;
  readonly CodeXml = CodeXml;
  readonly Layers = Layers;
  readonly Mail = Mail;
  cursorX = 0;
  cursorY = 0;
  ringX = 0;
  ringY = 0;
  private targetX = 0;
  private targetY = 0;
  private rafId = 0;

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      document.addEventListener('mousemove', this.onMouseMove);
      this.animateRing();
    }
  }

  private onMouseMove = (e: MouseEvent) => {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    this.targetX = e.clientX;
    this.targetY = e.clientY;
  };

  private animateRing = () => {
    this.ringX += (this.targetX - this.ringX) * 0.12;
    this.ringY += (this.targetY - this.ringY) * 0.12;
    this.cdr.detectChanges();
    this.rafId = requestAnimationFrame(this.animateRing);
  };


  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.removeEventListener('mousemove', this.onMouseMove);
      cancelAnimationFrame(this.rafId);
    }
  }
}
