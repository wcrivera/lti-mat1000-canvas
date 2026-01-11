import type { ReactNode } from 'react';

/**
 * Tamaños del modal
 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Props del componente Modal
 */
export interface ModalProps {
  /** Si el modal está abierto */
  isOpen: boolean;
  /** Callback para cerrar el modal */
  onClose: () => void;
  /** Título del modal (aparece en el header) */
  title?: ReactNode;
  /** Contenido del modal */
  children: ReactNode;
  /** Contenido del footer (botones de acción) */
  footer?: ReactNode;
  /** Tamaño del modal */
  size?: ModalSize;
  /** Si se puede cerrar haciendo clic fuera del modal */
  closeOnOverlayClick?: boolean;
  /** Si se puede cerrar con la tecla ESC */
  closeOnEsc?: boolean;
  /** Si se muestra el botón de cerrar (X) */
  showCloseButton?: boolean;
  /** Clase CSS adicional para el contenedor del modal */
  className?: string;
  /** Clase CSS adicional para el overlay */
  overlayClassName?: string;
  /** Si el modal tiene scroll interno cuando el contenido es largo */
  scrollBehavior?: 'inside' | 'outside';
  /** Callback cuando el modal se abre */
  onOpen?: () => void;
  /** Callback cuando el modal se cierra */
  onClosed?: () => void;
}

/**
 * Props del componente ModalHeader
 */
export interface ModalHeaderProps {
  /** Título del header */
  children: ReactNode;
  /** Callback para cerrar */
  onClose?: () => void;
  /** Si se muestra el botón de cerrar */
  showCloseButton?: boolean;
  /** Clase CSS adicional */
  className?: string;
}

/**
 * Props del componente ModalBody
 */
export interface ModalBodyProps {
  /** Contenido del body */
  children: ReactNode;
  /** Clase CSS adicional */
  className?: string;
}

/**
 * Props del componente ModalFooter
 */
export interface ModalFooterProps {
  /** Contenido del footer (típicamente botones) */
  children: ReactNode;
  /** Clase CSS adicional */
  className?: string;
}

/**
 * Configuración de tamaños
 */
export interface SizeConfig {
  maxWidth: string;
  padding: string;
}