import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Interfaz para definir cada tab individual
 */
export interface TabItem {
    /** Identificador único del tab */
    id: string;
    /** Etiqueta visible del tab */
    label: string;
    /** Ícono de lucide-react */
    icon: LucideIcon;
    /** Contenido que se renderiza cuando el tab está activo */
    content: ReactNode;
    /** Si el tab está deshabilitado (opcional) */
    disabled?: boolean;
    /** URL asociada al tab (opcional) */
    // url?: string;
}

/**
 * Props del componente Tabs
 */
export interface TabsProps {
    titulo: string;
    /** Array de tabs a renderizar */
    tabs: TabItem[];
    /** Tab activo por defecto (modo no controlado) */
    defaultTab?: string;
    /** Tab activo (modo controlado) */
    activeTab?: string;
    /** Callback cuando cambia el tab (modo controlado) */
    onTabChange?: (tabId: string) => void;
    /** Clase CSS adicional para el contenedor */
    className?: string;
}