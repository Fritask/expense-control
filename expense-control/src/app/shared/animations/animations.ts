import {
	trigger,
	style,
	transition,
	animate,
} from '@angular/animations';

export const Animations = {
	fadeInOut: trigger('fadeInOut', [
		transition(':enter', [
			style({ opacity: 0 }), // estado inicial (elemento não está no DOM)
			animate('300ms', style({ opacity: 1 })), // transição para quando o elemento entra
		]),
		transition(':leave', [
			animate('300ms', style({ opacity: 0 })), // transição para quando o elemento sai
		]),
	]),
};
