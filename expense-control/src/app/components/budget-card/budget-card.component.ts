import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
	selector: 'app-budget-card',
	standalone: true,
	imports: [CommonModule, MatProgressBarModule],
	templateUrl: './budget-card.component.html',
	styleUrl: './budget-card.component.scss',
})
export class BudgetCardComponent {
    @Input() totalSpent: number = 500;

    totalBudget: number = 6715.35;
}
