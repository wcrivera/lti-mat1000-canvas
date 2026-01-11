/**
 * Tipos de plataforma de video soportadas
 */
export type VideoPlatform = 'youtube' | 'vimeo';

/**
 * Aspect ratios disponibles
 */
export type AspectRatio = '16:9' | '4:3' | '1:1' | '21:9';

/**
 * Opciones específicas de Vimeo
 */
export interface VimeoOptions {
  /** Habilitar/deshabilitar botón de fullscreen */
  fullscreen?: boolean;
  /** Mostrar/ocultar título del video */
  title?: boolean;
  /** Mostrar/ocultar nombre del autor (byline) */
  byline?: boolean;
  /** Mostrar/ocultar avatar del autor */
  portrait?: boolean;
  /** Color del player en formato hexadecimal (sin #) */
  color?: string;
  /** Habilitar Picture-in-Picture */
  pip?: boolean;
  /** Mostrar controles de velocidad de reproducción */
  speed?: boolean;
  /** Habilitar selector de calidad */
  quality?: boolean;
  /** Modo de fondo (background mode) */
  background?: boolean;
  /** Habilitar modo transparente */
  transparent?: boolean;
  /** Texto de seguimiento (para analytics) */
  texttrack?: string;
  /** Mostrar/ocultar tiempo restante en la barra de progreso */
  dnt?: boolean; // Do Not Track
}

/**
 * Opciones específicas de YouTube
 */
export interface YouTubeOptions {
  /** Habilitar/deshabilitar botón de fullscreen */
  fullscreen?: boolean;
  /** Mostrar videos relacionados al final (0 = del mismo canal, 1 = cualquiera) */
  rel?: 0 | 1;
  /** Cargar subtítulos por defecto (1 = sí) */
  ccLoadPolicy?: 0 | 1;
  /** Mostrar anotaciones del video (1 = sí, 3 = no) */
  ivLoadPolicy?: 1 | 3;
  /** Idioma de la interfaz */
  hl?: string;
  /** Ocultar logo de YouTube */
  modestbranding?: 0 | 1;
  /** Color del tema (dark o light) */
  color?: 'red' | 'white';
  /** Habilitar modo de teclado */
  disablekb?: 0 | 1;
  /** Habilitar API de JavaScript */
  enablejsapi?: 0 | 1;
  /** Tiempo de fin en segundos */
  end?: number;
  /** ID de la lista de reproducción */
  playlist?: string;
}

/**
 * Props del componente VideoPlayer
 */
export interface VideoPlayerProps {
  /** URL del video (YouTube o Vimeo) */
  url: string;
  /** Título del video (para accesibilidad) */
  title?: string;
  /** Aspect ratio del video */
  aspectRatio?: AspectRatio;
  /** Si el video debe reproducirse automáticamente */
  autoplay?: boolean;
  /** Si el video debe estar en loop */
  loop?: boolean;
  /** Si el video debe estar muteado */
  muted?: boolean;
  /** Si se muestran los controles del reproductor */
  controls?: boolean;
  /** Si se muestra la información del video (título, autor) */
  showInfo?: boolean;
  /** Tiempo de inicio en segundos */
  startTime?: number;
  /** Si se debe usar lazy loading */
  lazy?: boolean;
  /** Clase CSS adicional */
  className?: string;
  /** Opciones específicas de Vimeo */
  vimeoOptions?: VimeoOptions;
  /** Opciones específicas de YouTube */
  youtubeOptions?: YouTubeOptions;
  /** Callback cuando el video está listo */
  onReady?: () => void;
  /** Callback cuando el video inicia */
  onPlay?: () => void;
  /** Callback cuando el video termina */
  onEnd?: () => void;
}

/**
 * Información extraída del video
 */
export interface VideoInfo {
  /** Plataforma del video */
  platform: VideoPlatform;
  /** ID del video */
  videoId: string;
  /** URL del thumbnail */
  thumbnailUrl: string;
  /** URL del embed */
  embedUrl: string;
}

/**
 * Configuración de aspect ratio
 */
export interface AspectRatioConfig {
  paddingBottom: string;
  label: string;
}