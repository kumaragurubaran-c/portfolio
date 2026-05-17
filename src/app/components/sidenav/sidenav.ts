import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CircleUserRound, CodeXml, Layers, Mail } from 'lucide-angular';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav implements OnInit {
  readonly CircleUserRound = CircleUserRound;
  readonly CodeXml = CodeXml;
  readonly Layers = Layers;
  readonly Mail = Mail;

  activeSection = 'about-me';

  navItems = [
    { id: 'about-me', icon: CircleUserRound, label: 'About Me' },
    { id: 'skills',   icon: CodeXml,         label: 'Skills'   },
    { id: 'projects', icon: Layers,           label: 'Projects' },
    { id: 'contact',  icon: Mail,             label: 'Contact'  },
  ];

  ngOnInit(): void {
    const sections = this.navItems.map(i => i.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection = id;
  }
}
