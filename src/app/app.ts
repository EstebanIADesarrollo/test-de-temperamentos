import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Preguntas } from './components/preguntas/preguntas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Preguntas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-de-temperamentos';
}
