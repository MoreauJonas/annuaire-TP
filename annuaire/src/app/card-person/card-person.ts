import { Component, input } from '@angular/core';
import { Person } from '../models/person.model';
@Component({
  imports: [],
  selector: 'app-card-person',
  styleUrl: './card-person.css',
  templateUrl: './card-person.html',
})
export class CardPerson {
  person = input.required<Person>();
}
