import { Component, computed, signal, inject } from '@angular/core';
import { CardPerson } from '../card-person/card-person';
import { PersonApiService } from '../person-api.service';
import { RouterLink } from '@angular/router';
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
        const fullnameF =
          person.name.first.trim().toLowerCase() + ' ' + person.name.last.trim().toLowerCase();
        const fullnameL =
          person.name.last.trim().toLowerCase() + ' ' + person.name.first.trim().toLowerCase();

        return (
          fullnameF.startsWith(this.search().trim().toLowerCase()) ||
          fullnameL.startsWith(this.search().trim().toLowerCase())
        );
      });
    }
  });
}
