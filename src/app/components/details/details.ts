import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../../modules/person.interface';
import {PersonService} from '../../services/person';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class DetailsComponent implements OnInit {
  person?: Person;

  constructor(private route: ActivatedRoute, private personService: PersonService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.person = this.personService.getById(id);
    });
  }
}
