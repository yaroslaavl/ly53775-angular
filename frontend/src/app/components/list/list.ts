import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../modules/person.interface';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatListModule, MatCardModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class ListComponent implements OnInit {
  persons: Person[] = [];
  loading = false;
  error = '';

  constructor(private personService: PersonService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadPersons();
  }

  loadPersons() {
    this.loading = true;
    this.persons = [];
    this.personService.getAll().subscribe({
      next: (data) => {
        this.persons = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }

  delete(id?: number) {
    if (!id) return;
    this.personService.delete(id).subscribe({
      next: () => this.loadPersons(),
      error: (err) => (this.error = err.message),
    });
  }
}
