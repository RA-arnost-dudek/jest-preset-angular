import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Hero } from '../model/hero';
import { HeroService } from '../model/hero.service';
import { HighlightDirective } from '../shared/highlight.directive';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  standalone: true,
  imports: [AsyncPipe, NgForOf, HighlightDirective],
})
export class HeroListComponent {
  heroes: Observable<Hero[]>;
  selectedHero!: Hero;

  constructor(private router: Router, private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.router.navigate(['../heroes', this.selectedHero.id]);
  }
}
