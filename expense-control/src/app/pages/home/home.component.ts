import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetCardComponent } from '../../components/budget-card/budget-card.component';
import { CardCarouselComponent } from '../../components/card-carousel/card-carousel.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, BudgetCardComponent, CardCarouselComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
