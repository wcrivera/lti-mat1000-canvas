/**
 * Tipo de contenido del tab activo
 */
export type TabType = 'clase' | 'ayudantia' | 'ejercicio';

/**
 * Datos de un capítulo completo
 */
export interface Chapter {
  /** ID del capítulo */
  id: string;
  
  /** Título del capítulo */
  titulo: string;
  
  /** Contenido de la sección Clase */
  claseContent: ClaseContent;
  
  /** Contenido de la sección Ayudantía */
  ayudantiaContent: AyudantiaContent;
  
  /** Contenido de la sección Ejercicio */
  ejercicioContent: EjercicioContent;
}

/**
 * Contenido de la sección Clase
 */
export interface ClaseContent {
  /** ID del contenido */
  id: string;
  
  /** Teoría y explicaciones */
  teoria?: string;
  
  /** Ejemplos */
  ejemplos?: Example[];
  
  /** Recursos adicionales */
  recursos?: Resource[];
}

/**
 * Contenido de la sección Ayudantía
 */
export interface AyudantiaContent {
  /** ID del contenido */
  id: string;
  
  /** Material de apoyo */
  materialApoyo?: string;
  
  /** Ejercicios resueltos */
  ejerciciosResueltos?: SolvedExercise[];
  
  /** Videos tutoriales */
  videos?: Video[];
}

/**
 * Contenido de la sección Ejercicio
 */
export interface EjercicioContent {
  /** ID del ejercicio */
  id: string;
  
  /** Preguntas del ejercicio */
  preguntas: Question[];
  
  /** Configuración del ejercicio */
  configuracion: ExerciseConfig;
}

/**
 * Ejemplo de la clase
 */
export interface Example {
  id: string;
  titulo: string;
  descripcion: string;
  solucion?: string;
}

/**
 * Recurso adicional
 */
export interface Resource {
  id: string;
  tipo: 'pdf' | 'link' | 'video';
  titulo: string;
  url: string;
}

/**
 * Ejercicio resuelto
 */
export interface SolvedExercise {
  id: string;
  enunciado: string;
  pasos: string[];
  solucionFinal: string;
}

/**
 * Video tutorial
 */
export interface Video {
  id: string;
  titulo: string;
  url: string;
  duracion?: string;
}

/**
 * Pregunta del ejercicio
 */
export interface Question {
  id: string;
  tipo: 'multiple-choice' | 'numeric' | 'text' | 'true-false';
  enunciado: string;
  opciones?: string[];
  respuestaCorrecta?: string | number | boolean;
}

/**
 * Configuración del ejercicio
 */
export interface ExerciseConfig {
  mostrarRespuestasInmediatas: boolean;
  intentosPermitidos: number;
  tiempoLimite?: number; // en minutos
}