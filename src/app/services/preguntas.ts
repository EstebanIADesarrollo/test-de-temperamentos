import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  preguntas = [
    {
      "id": 1,
      "texto": "¿Cómo prefieres pasar tu tiempo libre?",
      "opciones": [
        { "texto": "Leyendo o reflexionando en soledad", "temperamento": "melancolico" },
        { "texto": "Planeando nuevos proyectos", "temperamento": "colerico" },
        { "texto": "Conversando con amigos", "temperamento": "sanguineo" },
        { "texto": "Descansando tranquilamente", "temperamento": "flematico" }
      ]
    },
    {
      "id": 2,
      "texto": "En una reunión social, tú normalmente:",
      "opciones": [
        { "texto": "Prefieres observar y escuchar", "temperamento": "flematico" },
        { "texto": "Eres el alma de la fiesta", "temperamento": "sanguineo" },
        { "texto": "Encuentras oportunidades para debatir ideas", "temperamento": "colerico" },
        { "texto": "Te sientes incómodo o fuera de lugar", "temperamento": "melancolico" }
      ]
    },
    {
      "id": 3,
      "texto": "Cuando enfrentas un problema difícil:",
      "opciones": [
        { "texto": "Lo analizas a fondo antes de actuar", "temperamento": "melancolico" },
        { "texto": "Te mantienes calmado y paciente", "temperamento": "flematico" },
        { "texto": "Buscas ayuda de otros rápidamente", "temperamento": "sanguineo" },
        { "texto": "Actúas con rapidez y decisión", "temperamento": "colerico" }
      ]
    },
    {
      "id": 4,
      "texto": "Tu escritorio o espacio de trabajo suele estar:",
      "opciones": [
        { "texto": "Ordenado y meticulosamente organizado", "temperamento": "melancolico" },
        { "texto": "Un poco desordenado pero funcional", "temperamento": "sanguineo" },
        { "texto": "Práctico y eficiente", "temperamento": "colerico" },
        { "texto": "Sencillo, sin muchos cambios", "temperamento": "flematico" }
      ]
    },
    {
      "id": 5,
      "texto": "Cuando te dan una nueva responsabilidad, tú:",
      "opciones": [
        { "texto": "La analizas y planificas con cuidado", "temperamento": "melancolico" },
        { "texto": "La aceptas con entusiasmo", "temperamento": "sanguineo" },
        { "texto": "Tomas control y diriges al grupo", "temperamento": "colerico" },
        { "texto": "La tomas con calma y sin estrés", "temperamento": "flematico" }
      ]
    },
    {
      "id": 6,
      "texto": "¿Cómo reaccionas cuando alguien te contradice?",
      "opciones": [
        { "texto": "Tiendes a evitar la confrontación", "temperamento": "flematico" },
        { "texto": "Te alteras con facilidad", "temperamento": "colerico" },
        { "texto": "Intentas convencerlo con argumentos", "temperamento": "melancolico" },
        { "texto": "Haces una broma para suavizar la situación", "temperamento": "sanguineo" }
      ]
    },
    {
      "id": 7,
      "texto": "Cuando piensas en tus metas a futuro:",
      "opciones": [
        { "texto": "Te enfocas en lo que puedes lograr ahora", "temperamento": "colerico" },
        { "texto": "Piensas con detalle y precaución", "temperamento": "melancolico" },
        { "texto": "Sueñas con muchas posibilidades", "temperamento": "sanguineo" },
        { "texto": "Prefieres no apresurarte", "temperamento": "flematico" }
      ]
    },
    {
      "id": 8,
      "texto": "En un equipo de trabajo tú sueles:",
      "opciones": [
        { "texto": "Liderar y tomar decisiones", "temperamento": "colerico" },
        { "texto": "Animar al grupo con energía", "temperamento": "sanguineo" },
        { "texto": "Mantener la armonía", "temperamento": "flematico" },
        { "texto": "Aportar ideas bien pensadas", "temperamento": "melancolico" }
      ]
    },
    {
      "id": 9,
      "texto": "Cuando cometes un error tú:",
      "opciones": [
        { "texto": "Te frustras contigo mismo", "temperamento": "melancolico" },
        { "texto": "Sigues adelante como si nada", "temperamento": "sanguineo" },
        { "texto": "Te molestas e intentas corregirlo inmediatamente", "temperamento": "colerico" },
        { "texto": "Lo tomas con tranquilidad", "temperamento": "flematico" }
      ]
    },
    {
      "id": 10,
      "texto": "¿Cómo describirías tu sentido del humor?",
      "opciones": [
        { "texto": "Divertido y espontáneo", "temperamento": "sanguineo" },
        { "texto": "Sutil y sarcástico", "temperamento": "melancolico" },
        { "texto": "Relajado y neutral", "temperamento": "flematico" },
        { "texto": "Agudo y directo", "temperamento": "colerico" }
      ]
    },
    {
      "id": 11,
      "texto": "¿Cómo manejas el estrés?",
      "opciones": [
        { "texto": "Te lo guardas y analizas en silencio", "temperamento": "melancolico" },
        { "texto": "Te muestras fuerte y no lo demuestras", "temperamento": "colerico" },
        { "texto": "Te distraes con actividades sociales", "temperamento": "sanguineo" },
        { "texto": "Lo aceptas con calma", "temperamento": "flematico" }
      ]
    },
    {
      "id": 12,
      "texto": "En los conflictos tú tiendes a:",
      "opciones": [
        { "texto": "Evitar enfrentamientos", "temperamento": "flematico" },
        { "texto": "Tomar el control de la situación", "temperamento": "colerico" },
        { "texto": "Expresar tus emociones abiertamente", "temperamento": "sanguineo" },
        { "texto": "Buscar la raíz del problema", "temperamento": "melancolico" }
      ]
    },
    {
      "id": 13,
      "texto": "Tu forma de tomar decisiones es:",
      "opciones": [
        { "texto": "Impulsiva y entusiasta", "temperamento": "sanguineo" },
        { "texto": "Rápida y determinada", "temperamento": "colerico" },
        { "texto": "Analítica y detallada", "temperamento": "melancolico" },
        { "texto": "Lenta pero segura", "temperamento": "flematico" }
      ]
    },
    {
      "id": 14,
      "texto": "¿Qué valoras más en una amistad?",
      "opciones": [
        { "texto": "Lealtad y profundidad", "temperamento": "melancolico" },
        { "texto": "Diversión y aventura", "temperamento": "sanguineo" },
        { "texto": "Respeto y estabilidad", "temperamento": "flematico" },
        { "texto": "Confianza y liderazgo", "temperamento": "colerico" }
      ]
    },
    {
      "id": 15,
      "texto": "¿Qué papel sueles tomar en los grupos?",
      "opciones": [
        { "texto": "Observador y reflexivo", "temperamento": "melancolico" },
        { "texto": "Pacificador y estable", "temperamento": "flematico" },
        { "texto": "Líder natural", "temperamento": "colerico" },
        { "texto": "Centro de atención", "temperamento": "sanguineo" }
      ]
    },
    {
      "id": 16,
      "texto": "Cuando te enfrentas a un reto tú:",
      "opciones": [
        { "texto": "Te entusiasmas y lo enfrentas de inmediato", "temperamento": "sanguineo" },
        { "texto": "Lo enfrentas con estrategia y liderazgo", "temperamento": "colerico" },
        { "texto": "Lo estudias a fondo antes de actuar", "temperamento": "melancolico" },
        { "texto": "Evalúas si vale la pena el esfuerzo", "temperamento": "flematico" }
      ]
    },
    {
      "id": 17,
      "texto": "Tu mayor fortaleza es:",
      "opciones": [
        { "texto": "Tu entusiasmo y energía", "temperamento": "sanguineo" },
        { "texto": "Tu liderazgo y determinación", "temperamento": "colerico" },
        { "texto": "Tu lógica y profundidad", "temperamento": "melancolico" },
        { "texto": "Tu paciencia y estabilidad", "temperamento": "flematico" }
      ]
    },
    {
      "id": 18,
      "texto": "¿Qué te molesta más?",
      "opciones": [
        { "texto": "La injusticia y la ineficiencia", "temperamento": "colerico" },
        { "texto": "El caos y el desorden", "temperamento": "melancolico" },
        { "texto": "La falta de armonía", "temperamento": "flematico" },
        { "texto": "El aburrimiento y la rutina", "temperamento": "sanguineo" }
      ]
    },
    {
      "id": 19,
      "texto": "¿Cómo sueles expresar tus emociones?",
      "opciones": [
        { "texto": "Con entusiasmo y frecuencia", "temperamento": "sanguineo" },
        { "texto": "De forma reservada", "temperamento": "melancolico" },
        { "texto": "Prácticamente no las muestro", "temperamento": "colerico" },
        { "texto": "Con calma y moderación", "temperamento": "flematico" }
      ]
    },
    {
      "id": 20,
      "texto": "En el trabajo, tú te destacas por:",
      "opciones": [
        { "texto": "Tu organización y perfeccionismo", "temperamento": "melancolico" },
        { "texto": "Tu capacidad de liderazgo", "temperamento": "colerico" },
        { "texto": "Tu entusiasmo y sociabilidad", "temperamento": "sanguineo" },
        { "texto": "Tu constancia y confiabilidad", "temperamento": "flematico" }
      ]
    },
    {
      "id": 21,
      "texto": "¿Cuál es tu enfoque ante los cambios?",
      "opciones": [
        { "texto": "Te adaptas pero prefieres la rutina", "temperamento": "flematico" },
        { "texto": "Los analizas y evalúas los riesgos", "temperamento": "melancolico" },
        { "texto": "Los impulsas tú mismo", "temperamento": "colerico" },
        { "texto": "Los abrazas con emoción", "temperamento": "sanguineo" }
      ]
    },
    {
      "id": 22,
      "texto": "¿Qué te resulta más difícil?",
      "opciones": [
        { "texto": "Tomar decisiones rápidas", "temperamento": "melancolico" },
        { "texto": "Permanecer en silencio mucho tiempo", "temperamento": "sanguineo" },
        { "texto": "Seguir órdenes sin cuestionarlas", "temperamento": "colerico" },
        { "texto": "Salir de tu zona de confort", "temperamento": "flematico" }
      ]
    },
    {
      "id": 23,
      "texto": "¿Cuál de estos te describe mejor?",
      "opciones": [
        { "texto": "Empático y sensible", "temperamento": "melancolico" },
        { "texto": "Tranquilo y estable", "temperamento": "flematico" },
        { "texto": "Seguro y dominante", "temperamento": "colerico" },
        { "texto": "Optimista y alegre", "temperamento": "sanguineo" }
      ]
    },
    {
      "id": 24,
      "texto": "¿Cómo es tu forma de comunicarte?",
      "opciones": [
        { "texto": "Con lógica y profundidad", "temperamento": "melancolico" },
        { "texto": "Con energía y entusiasmo", "temperamento": "sanguineo" },
        { "texto": "Con claridad y autoridad", "temperamento": "colerico" },
        { "texto": "Con calma y diplomacia", "temperamento": "flematico" }
      ]
    },
    {
      "id": 25,
      "texto": "¿Qué rol prefieres en un proyecto?",
      "opciones": [
        { "texto": "Planificador estratégico", "temperamento": "melancolico" },
        { "texto": "Líder ejecutor", "temperamento": "colerico" },
        { "texto": "Motivador del grupo", "temperamento": "sanguineo" },
        { "texto": "Coordinador silencioso", "temperamento": "flematico" }
      ]
    }
  ];

  constructor() { }

  getPreguntas() {
    return this.preguntas;
  }
}

