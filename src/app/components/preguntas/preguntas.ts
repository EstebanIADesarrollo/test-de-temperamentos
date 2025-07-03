import { Component, inject, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas';

@Component({
  selector: 'app-preguntas',
  imports: [],
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.css'
})
export class Preguntas implements OnInit {
  preguntasService = inject(PreguntasService);

  ngOnInit() {
    console.log(this.preguntasService.getPreguntas());
  }
}
