import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ModalProps } from './types';
import { ModalHeader, ModalBody, ModalFooter } from './ModalParts';
import { SIZE_CONFIG, OVERLAY_BASE_STYLES, MODAL_BASE_STYLES } from './modalStyles';
import {
  useEscapeKey,
  useBodyScrollLock,
  useFocusTrap,
  useModalLifecycle,
} from './useModalHooks';

/**
 * Componente Modal hermoso y completo
 * 
 * Características:
 * - Overlay oscuro con backdrop blur
 * - Botón de cerrar (X)
 * - Animaciones suaves
 * - Cierre con clic fuera (opcional)
 * - Cierre con ESC (opcional)
 * - 5 tamaños predefinidos
 * - Scroll automático
 * - Focus trap
 * - Body scroll lock
 * - Portal (renderiza fuera del DOM)
 * - TypeScript estricto
 * - Accesibilidad completa
 */
const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  className = '',
  overlayClassName = '',
  scrollBehavior = 'inside',
  onOpen,
  onClosed,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Configuración de tamaño
  const sizeConfig = SIZE_CONFIG[size];

  // Custom hooks
  useEscapeKey(isOpen, onClose, closeOnEsc);
  useBodyScrollLock(isOpen);
  useFocusTrap(isOpen, modalRef);
  useModalLifecycle(isOpen, onOpen, onClosed);

  // Montar el componente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animación de entrada/salida
  useEffect(() => {
    if (isOpen) {
      // Pequeño delay para la animación
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  /**
   * Maneja el clic en el overlay
   */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // No renderizar en SSR
  if (!mounted) return null;

  // No renderizar si no está abierto
  if (!isOpen && !isVisible) return null;

  // Clases del overlay con animación
  const overlayClasses = [
    OVERLAY_BASE_STYLES,
    overlayClassName,
    'transition-all duration-300',
    isVisible ? 'opacity-100' : 'opacity-0',
  ]
    .filter(Boolean)
    .join(' ');

  // Clases del modal con animación
  const modalClasses = [
    MODAL_BASE_STYLES,
    sizeConfig.maxWidth,
    sizeConfig.padding,
    className,
    'transition-all duration-300 transform',
    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    scrollBehavior === 'inside' ? 'max-h-[90vh] overflow-y-auto' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const modalContent = (
    <div
      className={overlayClasses}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        ref={modalRef}
        className={modalClasses}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <ModalHeader
            onClose={showCloseButton ? onClose : undefined}
            showCloseButton={showCloseButton}
          >
            <span id="modal-title">{title}</span>
          </ModalHeader>
        )}

        {/* Body */}
        <ModalBody>
          {children}
        </ModalBody>

        {/* Footer */}
        {footer && (
          <ModalFooter>
            {footer}
          </ModalFooter>
        )}
      </div>
    </div>
  );

  // Renderizar en un portal
  return createPortal(
    modalContent,
    document.body
  );
};

// Create compound component
export const Modal = ModalComponent as React.FC<ModalProps> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

// Exportar componentes auxiliares
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;