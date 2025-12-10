import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Person } from '../../modules/person.interface';
import { PersonService } from '../../services/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class DetailsComponent implements OnInit {
  person?: Person;
  loading: boolean = false;
  error: string = '';

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
      next: (data: Person) => {
        this.person = data;
        this.loading = false;

        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }
}
