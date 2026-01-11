import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

/**
 * Variantes de estilo del botón
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'ghost'
  | 'link'
  | 'outline'
  | 'white';

/**
 * Tamaños del botón
 */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Posición del ícono
 */
export type IconPosition = 'left' | 'right';

/**
 * Props base compartidas por button y anchor
 */
interface BaseButtonProps {
  /** Variante de estilo del botón */
  variant?: ButtonVariant;
  /** Tamaño del botón */
  size?: ButtonSize;
  /** Ícono de lucide-react */
  icon?: LucideIcon;
  /** Posición del ícono (solo aplica si hay texto) */
  iconPosition?: IconPosition;
  /** Si el botón está en estado de carga */
  loading?: boolean;
  /** Si el botón ocupa todo el ancho disponible */
  fullWidth?: boolean;
  /** Si el botón tiene bordes redondeados completos */
  rounded?: boolean;
  /** Contenido del botón (texto) */
  children?: React.ReactNode;
}

/**
 * Props cuando se usa como botón
 */
interface ButtonAsButton extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /** URL de destino (convierte en <a>) */
  href?: never;
}

/**
 * Props cuando se usa como link
 */
interface ButtonAsLink extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** URL de destino (convierte en <a>) */
  href: string;
  /** Target del link */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Rel attribute (se auto-genera si target="_blank") */
  rel?: string;
}

/**
 * Props del componente Button (union type polimórfico)
 */
export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Configuración de estilos por variante
 */
export interface VariantConfig {
  base: string;
  hover: string;
  active: string;
  disabled: string;
}

/**
 * Configuración de tamaños
 */
export interface SizeConfig {
  padding: string;
  fontSize: string;
  iconSize: string;
  height: string;
  gap: string;
}