import { Component, computed, signal, input, inject } from '@angular/core';
import { CardPerson } from '../card-person/card-person';
import { PersonApiService } from '../person-api.service';
import { RouterLink } from '@angular/router';
import { Person } from '../models/person.model';
@Component({
  imports: [CardPerson, RouterLink],
  selector: 'app-person-list',
  styleUrl: './person-list.css',
  templateUrl: './person-list.html',
})
export class PersonList {
  readonly personApi = inject(PersonApiService);
  search = signal<string>('');
  onClear(): void {
    this.search.set('');
  }
  onChange(value: Event): void {
    const input = (value.target as HTMLInputElement).value;
    this.search.set(input);
  }
  visiblePersons = computed(() => {
    const persons = this.personApi.persons();
    if (this.search() === '') {
      return persons;
    } else {
      return persons.filter((person) => {
        const firstname = person.name.first
          .trim()
          .toLowerCase()
          .includes(this.search().trim().toLowerCase());
        const lastname = person.name.last
          .trim()
          .toLowerCase()
          .includes(this.search().trim().toLowerCase());
        return firstname || lastname;
      });
    }
  });
}
