import { Component } from '@angular/core';
import { PersonService } from '../../services/person';
import { Router } from '@angular/router';
import { Person } from '../../modules/person.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-person.html',
  styleUrls: ['./add-person.css'],
})
export class AddPersonComponent {
  person: Person = {
    firstName: '',
    familyName: '',
    age: 0,
    address: {
      city: '',
      street: '',
      postCode: '',
    },
  };

  loading = false;
  error = '';

  constructor(private personService: PersonService, private router: Router) {}

  save() {
    this.loading = true;
    this.personService.add(this.person).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.message;
      },
    });
  }
}
