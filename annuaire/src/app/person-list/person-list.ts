import { Component, computed, signal, input, inject } from '@angular/core';
import { Person } from '../models/person.model';
import { AsyncState } from '../async-state/async-state';
import { CardPerson } from '../card-person/card-person';
import { PersonApiService } from '../person-api.service';
@Component({
  imports: [AsyncState, CardPerson],
  selector: 'app-person-list',
  styleUrl: './person-list.css',
  templateUrl: './person-list.html',
})
export class PersonList {
  loading = signal(true);
  error = signal<string | null>(null);

  personApi = inject(PersonApiService);
}
