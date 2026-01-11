import type { VariantConfig, SizeConfig } from './types';

/**
 * Configuración de estilos por variante
 */
export const VARIANT_STYLES: Record<string, VariantConfig> = {
  primary: {
    base: 'bg-blue-600 text-white border-transparent',
    hover: 'hover:bg-blue-700 hover:shadow-lg',
    active: 'active:bg-blue-800',
    disabled: 'disabled:bg-blue-300 disabled:cursor-not-allowed',
  },
  secondary: {
    base: 'bg-gray-600 text-white border-transparent',
    hover: 'hover:bg-gray-700 hover:shadow-lg',
    active: 'active:bg-gray-800',
    disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
  },
  success: {
    base: 'bg-green-600 text-white border-transparent',
    hover: 'hover:bg-green-700 hover:shadow-lg',
    active: 'active:bg-green-800',
    disabled: 'disabled:bg-green-300 disabled:cursor-not-allowed',
  },
  danger: {
    base: 'bg-red-600 text-white border-transparent',
    hover: 'hover:bg-red-700 hover:shadow-lg',
    active: 'active:bg-red-800',
    disabled: 'disabled:bg-red-300 disabled:cursor-not-allowed',
  },
  warning: {
    base: 'bg-orange-500 text-white border-transparent',
    hover: 'hover:bg-orange-600 hover:shadow-lg',
    active: 'active:bg-orange-700',
    disabled: 'disabled:bg-orange-300 disabled:cursor-not-allowed',
  },
  ghost: {
    base: 'bg-transparent text-gray-700 border-transparent',
    hover: 'hover:bg-gray-100 hover:text-gray-900',
    active: 'active:bg-gray-200',
    disabled: 'disabled:text-gray-400 disabled:cursor-not-allowed',
  },
  outline: {
    base: 'bg-transparent text-blue-600 border-blue-600 border-2',
    hover: 'hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700',
    active: 'active:bg-blue-100',
    disabled: 'disabled:text-blue-300 disabled:border-blue-300 disabled:cursor-not-allowed',
  },
  link: {
    base: 'bg-transparent text-blue-600 border-transparent underline-offset-4',
    hover: 'hover:underline hover:text-blue-700',
    active: 'active:text-blue-800',
    disabled: 'disabled:text-blue-300 disabled:cursor-not-allowed disabled:no-underline',
  },
  white: {
    base: 'bg-white text-chapter-500 border-transparent',
    hover: 'hover:text-chapter-500 hover:bg-gray-300 hover:shadow-lg',
    active: 'active:text-chapter-500',
    disabled: 'disabled:text-chapter-500 disabled:cursor-not-allowed disabled:no-underline',
  },
};

/**
 * Configuración de tamaños
 */
export const SIZE_STYLES: Record<string, SizeConfig> = {
  xs: {
    padding: 'px-2.5 py-1.5',
    fontSize: 'text-xs',
    iconSize: 'w-3 h-3',
    height: 'h-7',
    gap: 'gap-1.5',
  },
  sm: {
    padding: 'px-3 py-2',
    fontSize: 'text-sm',
    iconSize: 'w-4 h-4',
    height: 'h-9',
    gap: 'gap-2',
  },
  md: {
    padding: 'px-4 py-2.5',
    fontSize: 'text-base',
    iconSize: 'w-5 h-5',
    height: 'h-10',
    gap: 'gap-2',
  },
  lg: {
    padding: 'px-5 py-3',
    fontSize: 'text-lg',
    iconSize: 'w-6 h-6',
    height: 'h-12',
    gap: 'gap-2.5',
  },
  xl: {
    padding: 'px-6 py-4',
    fontSize: 'text-xl',
    iconSize: 'w-7 h-7',
    height: 'h-14',
    gap: 'gap-3',
  },
};

/**
 * Estilos base compartidos por todos los botones
 */
export const BASE_BUTTON_STYLES = `
  inline-flex items-center justify-center
  font-medium
  rounded-lg
  border
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  disabled:opacity-60
  select-none
`;