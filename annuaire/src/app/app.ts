import { Component, signal, inject, OnInit, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { PersonApiService } from './person-api.service';
import { Person } from './models/person.model';
import { PersonList } from './person-list/person-list';
import { AsyncState } from './async-state/async-state';
import { CardPerson } from './card-person/card-person';
@Component({
  imports: [RouterOutlet, Header, PersonList, AsyncState, CardPerson],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('annuaire');

  personApi = inject(PersonApiService);
  loading = signal(true);
  error = signal<string | null>(null);
  persons = signal<Person[]>([]);

  async ngOnInit(): Promise<void> {
    try {
      // this.personApi.getAll();
      this.persons.set(await this.personApi.getAll());
    } catch {
      this.error.set('Le catalogue est indisponible. Réessaie dans un instant.');
    } finally {
      this.loading.set(false); // qu'il ait réussi ou raté, on n'attend plus
    }
  }
  visiblePersons = computed(() => {
    const persons = this.persons();
    return persons;
  });
}
