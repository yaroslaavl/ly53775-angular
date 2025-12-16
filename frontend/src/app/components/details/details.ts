import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../modules/person.interface';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class DetailsComponent implements OnInit {
  person?: Person;
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getById(id);
    }
  }

  getById(id: number) {
    this.loading = true;
    this.personService.getById(id).subscribe({
      next: (data) => {
        this.person = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }
}
