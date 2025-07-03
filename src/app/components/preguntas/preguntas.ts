import { Component, inject } from '@angular/core';
import { PreguntasService } from '../../services/preguntas';

@Component({
  selector: 'app-preguntas',
  imports: [],
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.css'
})
export class Preguntas {
  preguntasService = inject(PreguntasService);
}
