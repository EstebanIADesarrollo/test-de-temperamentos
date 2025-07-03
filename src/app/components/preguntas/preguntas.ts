import { Component, inject, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas';
import { CommonModule } from '@angular/common';

interface Opcion {
  texto: string;
  temperamento: string;
}

interface Pregunta {
  id: number;
  texto: string;
  opciones: Opcion[];
}

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.css'
})
export class Preguntas implements OnInit {
  preguntasService = inject(PreguntasService);

  preguntas: Pregunta[] = [];
  preguntaActual: Pregunta | undefined;
  indicePreguntaActual: number = 0;
  respuestasUsuario: string[] = [];
  resultados: { [key: string]: number } = {};
  testFinalizado: boolean = false;

  ngOnInit() {
    this.preguntas = this.preguntasService.getPreguntas();
    this.preguntaActual = this.preguntas[this.indicePreguntaActual];
    console.log('Preguntas cargadas:', this.preguntas);
  }

  seleccionarOpcion(temperamento: string) {
    this.respuestasUsuario.push(temperamento);
    this.indicePreguntaActual++;

    if (this.indicePreguntaActual < this.preguntas.length) {
      this.preguntaActual = this.preguntas[this.indicePreguntaActual];
    } else {
      this.testFinalizado = true;
      this.calcularResultados();
    }
  }

  calcularResultados() {
    const conteoTemperamentos: { [key: string]: number } = {};
    this.respuestasUsuario.forEach(temperamento => {
      conteoTemperamentos[temperamento] = (conteoTemperamentos[temperamento] || 0) + 1;
    });

    const totalPreguntas = this.preguntas.length;
    for (const temperamento in conteoTemperamentos) {
      this.resultados[temperamento] = (conteoTemperamentos[temperamento] / totalPreguntas) * 100;
    }
    console.log('Resultados finales:', this.resultados);
  }
}
