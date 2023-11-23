import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, BottomNavigationComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'pt-BR'
		}
	],
})
export class AppComponent {
	title = 'expense-control';
}
