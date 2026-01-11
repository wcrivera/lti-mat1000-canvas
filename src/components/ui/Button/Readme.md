# Button Component - Links Documentation

## 🔗 Uso como Link

El componente `Button` automáticamente se renderiza como `<a>` cuando se proporciona la prop `href`.

### Ejemplo Básico
```tsx
import { Button } from '@/components/ui/Button';

// Renderiza como <a>
<Button href="/about" variant="primary">
  Acerca de Nosotros
</Button>
```

---

## 📝 Props para Links

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `href` | `string` | *requerido* | URL de destino (convierte el botón en `<a>`) |
| `target` | `'_blank' \| '_self' \| '_parent' \| '_top'` | `undefined` | Target del link |
| `rel` | `string` | Auto | Relación del link (auto-generado si `target="_blank"`) |
| `download` | `boolean \| string` | `undefined` | Indica que es un link de descarga |

Además acepta todas las props nativas de `HTMLAnchorElement`.

---

## 🔒 Seguridad Automática

### Target="_blank" Seguro

Cuando usas `target="_blank"`, el componente **automáticamente** agrega `rel="noopener noreferrer"` para prevenir vulnerabilidades de seguridad.

```tsx
// ❌ SIN el componente (vulnerable)
<a href="https://example.com" target="_blank">
  Link
</a>

// ✅ CON el componente (seguro automáticamente)
<Button href="https://example.com" target="_blank">
  Link Seguro
</Button>

// Se renderiza como:
// <a href="..." target="_blank" rel="noopener noreferrer">
```

### ¿Por qué es importante?

- **`noopener`**: Previene que la nueva página acceda a `window.opener`
- **`noreferrer`**: No envía el header `Referer` a la página destino

### Rel Personalizado

Si necesitas un `rel` específico, puedes sobrescribirlo:

```tsx
<Button 
  href="https://example.com" 
  target="_blank"
  rel="nofollow noopener noreferrer"
>
  Link con Nofollow
</Button>
```

---

## 🎯 Casos de Uso

### 1. Links Internos

```tsx
// Navegación dentro del sitio
<Button href="/" variant="ghost">
  Inicio
</Button>

<Button href="/courses" variant="primary">
  Ver Cursos
</Button>

<Button href="/contact" variant="outline">
  Contacto
</Button>
```

### 2. Links Externos (Nueva Pestaña)

```tsx
import { ExternalLink } from 'lucide-react';

<Button 
  href="https://github.com" 
  target="_blank"
  variant="primary"
  icon={ExternalLink}
  iconPosition="right"
>
  Ver en GitHub
</Button>

<Button 
  href="https://docs.example.com" 
  target="_blank"
  variant="outline"
>
  Documentación
</Button>
```

### 3. Links de Descarga

```tsx
import { Download } from 'lucide-react';

// Descarga simple
<Button 
  href="/files/documento.pdf" 
  download
  variant="success"
  icon={Download}
>
  Descargar PDF
</Button>

// Descarga con nombre personalizado
<Button 
  href="/files/report.pdf" 
  download="Reporte-2024.pdf"
  variant="primary"
>
  Descargar Reporte
</Button>
```

### 4. Navegación con Íconos

```tsx
import { Home, ChevronRight, ArrowRight } from 'lucide-react';

// Ícono a la izquierda
<Button href="/" icon={Home} variant="primary">
  Ir a Inicio
</Button>

// Ícono a la derecha
<Button 
  href="/next-step" 
  icon={ChevronRight}
  iconPosition="right"
  variant="primary"
>
  Continuar
</Button>

// Solo ícono
<Button href="/" icon={Home} variant="ghost" />
```

### 5. Call to Action (CTA)

```tsx
<div className="flex gap-4">
  <Button 
    href="/signup" 
    variant="primary"
    size="lg"
  >
    Crear Cuenta Gratis
  </Button>
  
  <Button 
    href="/demo" 
    target="_blank"
    variant="outline"
    size="lg"
  >
    Ver Demo
  </Button>
</div>
```

### 6. Navegación Principal

```tsx
<nav className="flex gap-4">
  <Button href="/" variant="ghost">Inicio</Button>
  <Button href="/courses" variant="ghost">Cursos</Button>
  <Button href="/about" variant="ghost">Acerca de</Button>
  <Button 
    href="https://blog.example.com" 
    target="_blank"
    variant="ghost"
  >
    Blog
  </Button>
</nav>
```

### 7. Full Width Links

```tsx
<div className="space-y-4">
  <Button 
    href="/dashboard" 
    fullWidth
    variant="primary"
  >
    Ir al Dashboard
  </Button>
  
  <Button 
    href="/download-app" 
    fullWidth
    variant="success"
    icon={Download}
  >
    Descargar Aplicación
  </Button>
</div>
```

---

## ⚖️ Button vs Link: ¿Cuándo usar cada uno?

### Usa como `<button>` (sin href):
- ✅ Ejecutar acciones en la misma página
- ✅ Abrir modales
- ✅ Submit de formularios
- ✅ Toggle estados
- ✅ Acciones asíncronas (con loading)

```tsx
<Button onClick={() => setModalOpen(true)}>
  Abrir Modal
</Button>

<Button loading onClick={handleSubmit}>
  Guardar
</Button>
```

### Usa como `<a>` (con href):
- ✅ Navegar a otra página
- ✅ Links externos
- ✅ Descargas
- ✅ Navegación del sitio
- ✅ SEO (links reales indexables)

```tsx
<Button href="/contact">
  Contacto
</Button>

<Button href="https://example.com" target="_blank">
  Sitio Externo
</Button>
```

---

## 🎨 Todas las Variantes Funcionan

```tsx
// Todas las variantes están disponibles para links
<Button href="/page" variant="primary">Primary</Button>
<Button href="/page" variant="secondary">Secondary</Button>
<Button href="/page" variant="success">Success</Button>
<Button href="/page" variant="danger">Danger</Button>
<Button href="/page" variant="warning">Warning</Button>
<Button href="/page" variant="ghost">Ghost</Button>
<Button href="/page" variant="outline">Outline</Button>
<Button href="/page" variant="link">Link</Button>
```

---

## 📏 Todos los Tamaños Funcionan

```tsx
<Button href="/page" size="xs">Extra Small</Button>
<Button href="/page" size="sm">Small</Button>
<Button href="/page" size="md">Medium</Button>
<Button href="/page" size="lg">Large</Button>
<Button href="/page" size="xl">Extra Large</Button>
```

---

## 🔄 Con Next.js / React Router

### Next.js (App Router)
```tsx
import Link from 'next/link';

// Opción 1: Usar Button directamente con href
<Button href="/page" variant="primary">
  Ir a Página
</Button>

// Opción 2: Usar como child de Link (si necesitas prefetch, etc)
<Link href="/page" passHref legacyBehavior>
  <Button as="a" variant="primary">
    Ir a Página
  </Button>
</Link>
```

### React Router
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// Opción 1: Con href normal
<Button href="/page">Ir a Página</Button>

// Opción 2: Con onClick (client-side navigation)
<Button onClick={() => navigate('/page')}>
  Ir a Página
</Button>
```

---

## 🌐 Ejemplos con Frameworks

### Ejemplo con Remix
```tsx
import { Link } from '@remix-run/react';

<Button href="/page" variant="primary">
  Navegación en Remix
</Button>
```

### Ejemplo con Astro
```tsx
<Button href="/page" variant="primary">
  Navegación en Astro
</Button>
```

---

## 🧪 Testing de Links

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renderiza como link cuando tiene href', () => {
  render(<Button href="/test">Link</Button>);
  
  const link = screen.getByText('Link');
  expect(link.tagName).toBe('A');
  expect(link).toHaveAttribute('href', '/test');
});

test('agrega rel="noopener noreferrer" con target="_blank"', () => {
  render(
    <Button href="https://example.com" target="_blank">
      External
    </Button>
  );
  
  const link = screen.getByText('External');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});
```

---

## 📊 Tabla de Referencia Rápida

| Uso | Código |
|-----|--------|
| Link interno | `<Button href="/page">Link</Button>` |
| Link externo | `<Button href="https://..." target="_blank">Link</Button>` |
| Descarga | `<Button href="/file.pdf" download>Download</Button>` |
| Con ícono izq | `<Button href="/page" icon={Home}>Home</Button>` |
| Con ícono der | `<Button href="/page" icon={Arrow} iconPosition="right">Next</Button>` |
| Full width | `<Button href="/page" fullWidth>Full</Button>` |
| Custom rel | `<Button href="..." rel="nofollow">Link</Button>` |

---

## ✅ Checklist de Buenas Prácticas

- ✅ Usa `<button>` para acciones (sin href)
- ✅ Usa `<a>` para navegación (con href)
- ✅ Siempre usa `target="_blank"` para links externos
- ✅ Confía en el auto-rel para seguridad
- ✅ Usa `download` para archivos descargables
- ✅ Agrega íconos `ExternalLink` para links externos
- ✅ Usa variantes apropiadas (primary para CTA, ghost para nav)