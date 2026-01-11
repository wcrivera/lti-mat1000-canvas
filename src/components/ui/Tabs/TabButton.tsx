import { LucideIcon } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

/**
 * Props del componente TabButton
 */
interface TabButtonProps {
  /** Identificador del tab */
  id: string;
  /** Etiqueta del tab */
  label: string;
  /** Ícono del tab */
  icon: LucideIcon;
  /** Si el tab está activo */
  isActive: boolean;
  /** Si el tab está deshabilitado */
  disabled?: boolean;
  /** URL asociada al tab */
  url?: string;
  /** Callback al hacer clic */
  onClick: (id: string) => void;
}

/**
 * Componente de botón individual para cada tab
 */
export const TabButton: React.FC<TabButtonProps> = ({
  id,
  label,
  icon: Icon,
  isActive,
  disabled = false,
  // url,
  onClick,
}) => {
  // const navigate = useNavigate();

  const handleClick = (): void => {
    // console.log(url)
    // navigate(url || '');
    if (!disabled) {
      onClick(id);
    }
  };

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${id}`}
      id={`tab-${id}`}
      disabled={disabled}
      onClick={handleClick}
      className={`
        flex items-center gap-2 px-6 py-3 font-light text-sm
        border border-white rounded-md
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-1 focus:ring-chapter-600 focus:ring-offset-1
        ${
          isActive
            ? 'border-chapter-600 text-chapter-600 bg-chapter-50'
            : 'border-transparent text-white hover:text-white hover:border-white hover:bg-chapter-700'
        }
        ${
          disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
};