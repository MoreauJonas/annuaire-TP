import { Component, computed, signal, input, inject } from '@angular/core';
import { AsyncState } from '../async-state/async-state';
import { CardPerson } from '../card-person/card-person';
import { PersonApiService } from '../person-api.service';
import { RouterLink } from '@angular/router';
@Component({
  imports: [AsyncState, CardPerson, RouterLink],
  selector: 'app-person-list',
  styleUrl: './person-list.css',
  templateUrl: './person-list.html',
})
export class PersonList {
  readonly personApi = inject(PersonApiService);
}
