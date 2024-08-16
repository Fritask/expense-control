import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from '../card-info/card-info.component';

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [CommonModule, CardInfoComponent],
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.scss'
})
export class CardCarouselComponent {

}
