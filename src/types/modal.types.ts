/**
 * Propiedades del componente Modal
 */
export interface ModalProps {
  /** Control de visibilidad del modal */
  isOpen: boolean;
  
  /** Función callback para cerrar el modal */
  onClose: () => void;
  
  /** Título del modal (opcional) */
  title?: string;
  
  /** Contenido del modal */
  children: React.ReactNode;
  
  /** Tamaño del modal */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /** Permitir cerrar al hacer clic fuera del modal */
  closeOnOverlayClick?: boolean;
  
  /** Mostrar botón de cerrar (X) */
  showCloseButton?: boolean;
  
  /** Clases CSS adicionales para el contenedor del modal */
  className?: string;
}