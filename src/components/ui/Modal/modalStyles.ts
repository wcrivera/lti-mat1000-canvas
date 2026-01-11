import type { SizeConfig } from './types';

/**
 * Configuración de tamaños del modal
 */
export const SIZE_CONFIG: Record<string, SizeConfig> = {
  sm: {
    maxWidth: 'max-w-md',
    padding: 'p-6',
  },
  md: {
    maxWidth: 'max-w-lg',
    padding: 'p-6',
  },
  lg: {
    maxWidth: 'max-w-2xl',
    padding: 'p-8',
  },
  xl: {
    maxWidth: 'max-w-4xl',
    padding: 'p-8',
  },
  full: {
    maxWidth: 'max-w-7xl',
    padding: 'p-10',
  },
};

/**
 * Estilos base del overlay
 */
export const OVERLAY_BASE_STYLES = `
  fixed inset-0 z-50
  bg-black/50 backdrop-blur-sm
  flex items-center justify-center
  p-4
  overflow-y-auto
`;

/**
 * Estilos base del contenedor del modal
 */
export const MODAL_BASE_STYLES = `
  relative
  bg-white
  rounded-xl
  shadow-2xl
  w-full
  my-8
`;

/**
 * Estilos del header
 */
export const HEADER_STYLES = `
  flex items-center justify-between
  border-b border-gray-200
  pb-4 mb-4
`;

/**
 * Estilos del footer
 */
export const FOOTER_STYLES = `
  flex items-center justify-end gap-3
  border-t border-gray-200
  pt-4 mt-6
`;

/**
 * Estilos del botón de cerrar
 */
export const CLOSE_BUTTON_STYLES = `
  absolute top-4 right-4
  p-2
  rounded-lg
  text-gray-400 hover:text-gray-600
  hover:bg-gray-100
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500
`;