import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { PersonApiService } from '../person-api.service';
import { Person } from '../models/person.model';
import { count } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  personApi = inject(PersonApiService);
}
