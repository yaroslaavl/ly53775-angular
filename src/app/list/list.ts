import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  new: string = '';
  createdI: string[] = [];

  addItem() {
    if (!this.new.trim()) return;

    this.createdI.push(this.new.trim());
    this.new = '';
  }

  removeItem(index: number) {
    this.createdI.splice(index, 1);
  }
}
