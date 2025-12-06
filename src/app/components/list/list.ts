import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../services/person';
import {Person} from '../../modules/person.interface';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    RouterLink, CommonModule
  ],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.persons = this.personService.getAll();
  }


  delete(id: number) {
    this.personService.delete(id);
    this.persons = this.personService.getAll();
  }
}
