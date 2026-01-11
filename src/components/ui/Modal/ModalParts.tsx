import { X } from 'lucide-react';
import type { ModalHeaderProps, ModalBodyProps, ModalFooterProps } from './types';
import { HEADER_STYLES, FOOTER_STYLES, CLOSE_BUTTON_STYLES } from './modalStyles';

/**
 * Componente ModalHeader
 */
export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  onClose,
  showCloseButton = true,
  className = '',
}) => {
  return (
    <div className={`${HEADER_STYLES} ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900">
        {children}
      </h2>
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className={CLOSE_BUTTON_STYLES}
          aria-label="Cerrar modal"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

/**
 * Componente ModalBody
 */
export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`text-gray-700 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Componente ModalFooter
 */
export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${FOOTER_STYLES} ${className}`}>
      {children}
    </div>
  );
};