import { Component, signal, computed, input, inject } from '@angular/core';
import { AsyncState } from '../async-state/async-state';
import { CardPerson } from '../card-person/card-person';
import { Person } from '../models/person.model';
import { PersonApiService } from '../person-api.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [AsyncState, CardPerson, AsyncState, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly personApi = inject(PersonApiService);
  loading = signal(false);
  error = signal<string | null>(null);
}
