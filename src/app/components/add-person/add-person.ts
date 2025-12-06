import { Component } from '@angular/core';
import {PersonService} from '../../services/person';
import { Router } from "@angular/router";
import {Person} from '../../modules/person.interface';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-person',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-person.html',
  styleUrls: ['./add-person.css'],
})
export class AddPersonComponent {
  person: Person = { address: {} };

  constructor(private personService: PersonService, private router: Router) {}

  save() {
    this.personService.add(this.person);
    this.router.navigate(['/']).then(r => r);
  }
}
