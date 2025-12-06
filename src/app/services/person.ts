import { Injectable } from '@angular/core';
import {Person} from '../modules/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private storageKey = 'persons';

  constructor() { }

  getById(id: number): Person | undefined {
    return this.getAll()[id];
  }

  getAll(): Person[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  delete(id: number): void {
    const persons = this.getAll();
    persons.splice(id, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  add(person: Person): void {
    const persons = this.getAll();
    persons.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

}
