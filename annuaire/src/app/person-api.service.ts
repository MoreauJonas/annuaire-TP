import { Service, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Person } from './models/person.model';
import { PersonResponse } from './models/person.model';

@Service()
export class PersonApiService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://randomuser.me/api/';

  private readonly persons = signal<Person[]>([]);
  readonly count = computed(() => this.persons().length);

  async getAll(): Promise<Person[]> {
    const response = await firstValueFrom(
      this.http.get<PersonResponse>(`${this.url}?seed=cda2&results=30&nat=fr`),
    );
    this.persons.set(response.results);
    return response.results;
  }
}
