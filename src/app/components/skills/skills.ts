import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/portfolio.model';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit{
  skills: Skill[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }
}
