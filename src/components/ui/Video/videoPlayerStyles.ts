import type { AspectRatioConfig } from './types';

/**
 * Configuración de aspect ratios
 * El padding-bottom se calcula como: (height / width) * 100
 */
export const ASPECT_RATIO_CONFIG: Record<string, AspectRatioConfig> = {
  '16:9': {
    paddingBottom: '56.25%', // (9/16) * 100
    label: '16:9 (Widescreen)',
  },
  '4:3': {
    paddingBottom: '75%', // (3/4) * 100
    label: '4:3 (Standard)',
  },
  '1:1': {
    paddingBottom: '100%', // (1/1) * 100
    label: '1:1 (Square)',
  },
  '21:9': {
    paddingBottom: '42.86%', // (9/21) * 100
    label: '21:9 (Ultrawide)',
  },
};

/**
 * Estilos base del contenedor del video
 */
export const VIDEO_CONTAINER_STYLES = `
  relative
  w-full
  overflow-hidden
  rounded-lg
  bg-gray-900
  shadow-lg
`;

/**
 * Estilos del wrapper responsive
 */
export const RESPONSIVE_WRAPPER_STYLES = `
  relative
  w-full
  height-0
`;

/**
 * Estilos del iframe
 */
export const IFRAME_STYLES = `
  absolute
  top-0
  left-0
  w-full
  h-full
  border-0
`;

/**
 * Estilos del thumbnail (antes de cargar)
 */
export const THUMBNAIL_STYLES = `
  absolute
  top-0
  left-0
  w-full
  h-full
  object-cover
  cursor-pointer
  transition-all
  duration-300
  hover:opacity-90
`;

/**
 * Estilos del botón de play
 */
export const PLAY_BUTTON_STYLES = `
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  w-20
  h-20
  bg-red-600
  rounded-full
  flex
  items-center
  justify-center
  cursor-pointer
  transition-all
  duration-300
  hover:bg-red-700
  hover:scale-110
  shadow-2xl
`;

/**
 * Estilos del overlay de carga
 */
export const LOADING_OVERLAY_STYLES = `
  absolute
  inset-0
  flex
  items-center
  justify-center
  bg-gray-900/80
  backdrop-blur-sm
`;
