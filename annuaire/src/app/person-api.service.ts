import { Service, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Person } from './models/person.model';
import { PersonResponse } from './models/person.model';

@Service()
export class PersonApiService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://randomuser.me/api/';

  readonly persons = signal<Person[]>([]);
  readonly count = computed(() => this.persons().length);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.getAll();
  }

  async getAll(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    try {
      const response = await firstValueFrom(
        this.http.get<PersonResponse>(`${this.url}?seed=cda2&results=30&nat=fr`),
      );
      this.persons.set(response.results);
    } catch (err) {
      // on arrive ici seulement si quelque chose a échoué dans le try
      this.error.set('Impossible de charger cet annuaire');
    } finally {
      // on passe toujours ici, que l'appel ait réussi ou échoué
      this.loading.set(false);
    }
  }
  async getById(uuid: string): Promise<Person> {
    return firstValueFrom(this.http.get<Person>(`${this.url}${uuid}`));
  }
}
