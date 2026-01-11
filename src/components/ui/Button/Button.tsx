import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import type { ButtonProps } from './types';
import { VARIANT_STYLES, SIZE_STYLES, BASE_BUTTON_STYLES } from './buttonStyles';
import { Link } from 'react-router-dom';

/**
 * Componente Button hermoso y versátil con soporte para íconos y links
 * 
 * Características:
 * - 8 variantes de estilo (primary, secondary, success, danger, warning, ghost, outline, link)
 * - 5 tamaños (xs, sm, md, lg, xl)
 * - Soporte para íconos (solo ícono, ícono + texto izquierda/derecha)
 * - Estados: hover, active, disabled, loading
 * - Soporte completo para links (href, target, rel)
 * - Full width opcional
 * - Bordes redondeados completos opcional
 * - TypeScript estricto
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      loading = false,
      fullWidth = false,
      rounded = false,
      className = '',
      children,
      ...restProps
    } = props;

    // Obtener configuraciones de estilo
    const variantConfig = VARIANT_STYLES[variant];
    const sizeConfig = SIZE_STYLES[size];

    // Determinar si es un botón solo de ícono
    const isIconOnly = Icon && !children;

    // Construir clases CSS
    const baseClasses = [
      BASE_BUTTON_STYLES,
      variantConfig.base,
      variantConfig.hover,
      variantConfig.active,
      variantConfig.disabled,
      sizeConfig.fontSize,
      isIconOnly ? sizeConfig.height : sizeConfig.padding,
      isIconOnly ? 'aspect-square' : sizeConfig.gap,
      fullWidth ? 'w-full' : '',
      rounded ? 'rounded-full' : 'rounded-lg',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Ícono a renderizar (loading o normal)
    const IconComponent = loading ? Loader2 : Icon;

    // Contenido compartido entre button y anchor
    const content = (
      <>
        {/* Ícono a la izquierda */}
        {IconComponent && iconPosition === 'left' && (
          <IconComponent
            className={`${sizeConfig.iconSize} ${loading ? 'animate-spin' : ''}`}
          />
        )}

        {/* Texto del botón */}
        {children && <span>{children}</span>}

        {/* Ícono a la derecha */}
        {IconComponent && iconPosition === 'right' && !loading && (
          <IconComponent className={sizeConfig.iconSize} />
        )}

        {/* Spinner de loading a la derecha si loading está activo */}
        {loading && iconPosition === 'right' && (
          <Loader2 className={`${sizeConfig.iconSize} animate-spin`} />
        )}
      </>
    );

    // Renderizar como link si tiene href
    if ('href' in restProps && restProps.href) {
      const { href, target, rel, ...anchorProps } = restProps;

      // Auto-agregar rel="noopener noreferrer" si target="_blank"
      const computedRel = target === '_blank' 
        ? rel || 'noopener noreferrer'
        : rel;

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={href}
          target={target}
          rel={computedRel}
          className={baseClasses}
          aria-disabled={loading}
          {...anchorProps}
        >
          {content}
        </Link>
      );
    }

    // Renderizar como button
    const { disabled, type = 'button', ...buttonProps } = restProps as any;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled || loading}
        className={baseClasses}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';