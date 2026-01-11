import { useEffect, RefObject } from 'react';

/**
 * Hook para manejar el cierre con tecla ESC
 */
export function useEscapeKey(
  isOpen: boolean,
  onClose: () => void,
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!isOpen || !enabled) return;

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, enabled]);
}

/**
 * Hook para bloquear el scroll del body cuando el modal está abierto
 */
export function useBodyScrollLock(isOpen: boolean): void {
  useEffect(() => {
    if (isOpen) {
      // Guardar el scroll actual
      const scrollY = window.scrollY;
      
      // Bloquear scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        // Restaurar scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);
}

/**
 * Hook para focus trap (mantener el foco dentro del modal)
 */
export function useFocusTrap(
  isOpen: boolean,
  modalRef: RefObject<HTMLDivElement>
): void {
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus en el primer elemento al abrir
    firstElement?.focus();

    const handleTab = (event: KeyboardEvent): void => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTab as EventListener);

    return () => {
      modal.removeEventListener('keydown', handleTab as EventListener);
    };
  }, [isOpen, modalRef]);
}

/**
 * Hook para llamar callbacks de lifecycle
 */
export function useModalLifecycle(
  isOpen: boolean,
  onOpen?: () => void,
  onClosed?: () => void
): void {
  useEffect(() => {
    if (isOpen) {
      onOpen?.();
    } else {
      onClosed?.();
    }
  }, [isOpen, onOpen, onClosed]);
}