import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestResultsService {
  results = signal<{ [key: string]: number } | null>(null);

  constructor() { }
}
