import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {List} from './list/list';
import {Random} from './random/random';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Random, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message: string = 'Moja pierwsza wiadomość';
}
