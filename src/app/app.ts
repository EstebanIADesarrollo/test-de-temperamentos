import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Preguntas } from './components/preguntas/preguntas';
import { Resultados } from './components/resultados/resultados';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Preguntas, Resultados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-de-temperamentos';
}
