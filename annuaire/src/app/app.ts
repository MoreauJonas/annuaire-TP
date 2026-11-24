import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { PersonApiService } from './person-api.service';
@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('annuaire');
  personApi = inject(PersonApiService);
  loading = signal(true);
  error = signal<string | null>(null);

  async ngOnInit(): Promise<void> {
    try {
      this.personApi.getAll();
    } catch {
      this.error.set('Le catalogue est indisponible. Réessaie dans un instant.');
    } finally {
      this.loading.set(false); // qu'il ait réussi ou raté, on n'attend plus
    }
  }
}
