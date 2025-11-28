import {Component, Input} from '@angular/core';
import {RandomService} from '../random-service';

@Component({
  selector: 'app-random',
  imports: [],
  standalone: true,
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {

  @Input() max: number = 100;

  number: number = 0;
  message: string = '';
  color: string = '';

  constructor(private randomService: RandomService) {}

  generate() {
    this.number = this.randomService.getRandomNumber(this.max);

    if (this.number <= 0.5 * this.max) {
      this.message = `Liczba jest < lub = niż 0.5 * ${this.max}.`;
      this.color = 'green';
    } else {
      this.message = `Liczba jest > niż 0.5 * ${this.max}.`;
      this.color = 'red';
    }
  }
}
