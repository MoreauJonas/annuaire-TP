import { Component, signal, computed, input, inject } from '@angular/core';
import { AsyncState } from '../async-state/async-state';
import { PersonApiService } from '../person-api.service';
import { RouterLink } from '@angular/router';
import { PersonList } from '../person-list/person-list';

@Component({
  imports: [AsyncState, PersonList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly personApi = inject(PersonApiService);
}
