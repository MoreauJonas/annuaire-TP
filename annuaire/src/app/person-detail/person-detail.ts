import { Component, computed, inject, input, signal } from '@angular/core';
import { PersonApiService } from '../person-api.service';
@Component({
  imports: [],
  selector: 'app-person-detail',
  styleUrl: './person-detail.css',
  templateUrl: './person-detail.html',
})
export class PersonDetail {
  private readonly personApi = inject(PersonApiService);
  uuid = input.required<string>(); // le :uuid de l'adresse, toujours du texte
  persons = computed(() => this.personApi.persons().find((el) => el.login.uuid === this.uuid()));
  loading = signal(true);
}
