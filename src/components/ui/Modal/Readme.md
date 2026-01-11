# Modal Component - Documentación Completa

## 📋 Descripción
Componente Modal hermoso y completamente funcional con animaciones, accesibilidad y múltiples opciones de personalización.

## ✨ Características Principales
- ✅ **Overlay oscuro** con backdrop blur
- ✅ **Botón de cerrar (X)** personalizable
- ✅ **Animaciones suaves** de entrada/salida
- ✅ **Cierre con clic fuera** (opcional)
- ✅ **Cierre con tecla ESC** (opcional)
- ✅ **5 tamaños predefinidos**: sm, md, lg, xl, full
- ✅ **Scroll automático** si el contenido es largo
- ✅ **Focus trap** (navegación con Tab dentro del modal)
- ✅ **Body scroll lock** (evita scroll de fondo)
- ✅ **Portal** (renderiza fuera del DOM tree)
- ✅ **TypeScript estricto**
- ✅ **Accesibilidad completa** (ARIA labels, roles)

## 📦 Instalación

### 1. Asegúrate de tener las dependencias
```bash
npm install lucide-react
```

### 2. Copiar archivos
```
src/components/ui/Modal/
├── Modal.tsx
├── ModalParts.tsx
├── types.ts
├── modalStyles.ts
├── useModalHooks.ts
└── index.ts
```

## 🚀 Uso Básico

### Ejemplo Simple
```tsx
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Abrir Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Mi Modal"
      >
        <p>Contenido del modal aquí</p>
      </Modal>
    </>
  );
};
```

### Con Footer
```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmar Acción"
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
        Confirmar
      </Button>
    </>
  }
>
  <p>¿Estás seguro de esta acción?</p>
</Modal>
```

## 📝 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `isOpen` | `boolean` | *requerido* | Si el modal está abierto |
| `onClose` | `() => void` | *requerido* | Callback para cerrar |
| `title` | `ReactNode` | `undefined` | Título del modal |
| `children` | `ReactNode` | *requerido* | Contenido del modal |
| `footer` | `ReactNode` | `undefined` | Contenido del footer |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Tamaño del modal |
| `closeOnOverlayClick` | `boolean` | `true` | Cerrar al hacer clic fuera |
| `closeOnEsc` | `boolean` | `true` | Cerrar con tecla ESC |
| `showCloseButton` | `boolean` | `true` | Mostrar botón X |
| `className` | `string` | `''` | Clase CSS para el modal |
| `overlayClassName` | `string` | `''` | Clase CSS para el overlay |
| `scrollBehavior` | `'inside' \| 'outside'` | `'inside'` | Comportamiento del scroll |
| `onOpen` | `() => void` | `undefined` | Callback al abrir |
| `onClosed` | `() => void` | `undefined` | Callback al cerrar |

## 📏 Tamaños

```tsx
// Pequeño (max-w-md)
<Modal size="sm" {...props}>...</Modal>

// Mediano (max-w-lg) - Default
<Modal size="md" {...props}>...</Modal>

// Grande (max-w-2xl)
<Modal size="lg" {...props}>...</Modal>

// Extra Grande (max-w-4xl)
<Modal size="xl" {...props}>...</Modal>

// Full (max-w-7xl)
<Modal size="full" {...props}>...</Modal>
```

## 💼 Casos de Uso

### 1. Modal de Confirmación
```tsx
import { Trash2 } from 'lucide-react';

<Modal
  isOpen={confirmOpen}
  onClose={() => setConfirmOpen(false)}
  title="Confirmar Eliminación"
  size="sm"
  footer={
    <>
      <Button variant="ghost" onClick={() => setConfirmOpen(false)}>
        Cancelar
      </Button>
      <Button variant="danger" icon={Trash2} onClick={handleDelete}>
        Eliminar
      </Button>
    </>
  }
>
  <p>¿Estás seguro de que deseas eliminar este elemento?</p>
  <p className="text-sm text-gray-600 mt-2">
    Esta acción no se puede deshacer.
  </p>
</Modal>
```

### 2. Modal de Éxito
```tsx
import { Check } from 'lucide-react';

<Modal
  isOpen={successOpen}
  onClose={() => setSuccessOpen(false)}
  size="sm"
  footer={
    <Button variant="success" onClick={() => setSuccessOpen(false)} fullWidth>
      Continuar
    </Button>
  }
>
  <div className="text-center py-6">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Check className="w-8 h-8 text-green-600" />
    </div>
    <h3 className="text-xl font-bold mb-2">¡Operación Exitosa!</h3>
    <p className="text-gray-600">Los cambios se han guardado.</p>
  </div>
</Modal>
```

### 3. Modal con Formulario
```tsx
<Modal
  isOpen={formOpen}
  onClose={() => setFormOpen(false)}
  title="Crear Usuario"
  size="md"
  footer={
    <>
      <Button variant="ghost" onClick={() => setFormOpen(false)}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Guardar
      </Button>
    </>
  }
>
  <div className="space-y-4">
    <input
      type="text"
      placeholder="Nombre"
      className="w-full px-3 py-2 border rounded-lg"
    />
    <input
      type="email"
      placeholder="Email"
      className="w-full px-3 py-2 border rounded-lg"
    />
  </div>
</Modal>
```

### 4. Modal Sin Botón de Cerrar
```tsx
<Modal
  isOpen={requiredOpen}
  onClose={() => setRequiredOpen(false)}
  title="Acción Requerida"
  showCloseButton={false}
  closeOnOverlayClick={false}
  closeOnEsc={false}
  footer={
    <>
      <Button variant="ghost" onClick={() => setRequiredOpen(false)}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleAccept}>
        Aceptar
      </Button>
    </>
  }
>
  <p>Debes aceptar los términos para continuar.</p>
</Modal>
```

### 5. Modal con Contenido Largo
```tsx
<Modal
  isOpen={longOpen}
  onClose={() => setLongOpen(false)}
  title="Términos y Condiciones"
  size="lg"
  footer={
    <Button variant="primary" onClick={() => setLongOpen(false)}>
      Aceptar
    </Button>
  }
>
  <div className="space-y-4">
    {/* Contenido largo aquí */}
    {/* El modal tendrá scroll automático */}
  </div>
</Modal>
```

## 🎨 Personalización

### Estilos Personalizados
```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  className="bg-gradient-to-br from-blue-50 to-indigo-50"
  overlayClassName="bg-blue-900/30"
>
  <div className="text-center">
    <h2 className="text-2xl font-bold">Modal Personalizado</h2>
  </div>
</Modal>
```

### Sin Título ni Footer
```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="md"
>
  <div className="text-center py-8">
    <h2 className="text-2xl font-bold mb-4">Contenido Personalizado</h2>
    <p>Sin título ni footer predefinidos</p>
  </div>
</Modal>
```

## ⌨️ Keyboard & Accesibilidad

### Navegación con Teclado
- **ESC**: Cierra el modal (si `closeOnEsc={true}`)
- **Tab**: Navega entre elementos enfocables dentro del modal
- **Shift + Tab**: Navega hacia atrás

### Focus Trap
El modal implementa un "focus trap" que mantiene el foco dentro del modal:
- Al abrir, el foco se mueve al primer elemento enfocable
- Tab solo navega entre elementos dentro del modal
- Al llegar al último elemento y presionar Tab, vuelve al primero

### ARIA Attributes
```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>
  <!-- contenido -->
</div>
```

## 🎭 Animaciones

El modal incluye animaciones suaves:
- **Entrada**: Fade in + scale up (300ms)
- **Salida**: Fade out + scale down (300ms)
- **Overlay**: Fade in/out

## 🔒 Body Scroll Lock

Cuando el modal está abierto:
- El body deja de hacer scroll
- Se mantiene la posición del scroll
- Al cerrar, se restaura la posición exacta

## 🌐 Portal

El modal se renderiza en un portal fuera del DOM tree normal:
```tsx
// Se renderiza directamente en document.body
// No afectado por overflow: hidden de padres
// Siempre encima de otros elementos (z-index)
```

## 🧪 Testing

### Ejemplo con React Testing Library
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

test('abre y cierra el modal', () => {
  const handleClose = jest.fn();
  
  render(
    <Modal isOpen={true} onClose={handleClose} title="Test">
      <p>Contenido</p>
    </Modal>
  );

  expect(screen.getByText('Test')).toBeInTheDocument();
  
  // Cerrar con botón X
  fireEvent.click(screen.getByLabelText('Cerrar modal'));
  expect(handleClose).toHaveBeenCalled();
});

test('cierra con tecla ESC', () => {
  const handleClose = jest.fn();
  
  render(
    <Modal isOpen={true} onClose={handleClose} title="Test">
      <p>Contenido</p>
    </Modal>
  );

  fireEvent.keyDown(document, { key: 'Escape' });
  expect(handleClose).toHaveBeenCalled();
});
```

## 🔍 Troubleshooting

### El modal no se cierra con ESC
**Solución**: Verifica que `closeOnEsc={true}` (es el default)

### El modal no se cierra haciendo clic fuera
**Solución**: Verifica que `closeOnOverlayClick={true}` (es el default)

### El scroll del fondo sigue funcionando
**Solución**: El body scroll lock debería funcionar automáticamente. Verifica que no haya CSS custom que interfiera.

### Animación no funciona
**Solución**: Asegúrate de que Tailwind está configurado correctamente y que las clases de transición están disponibles.

## 📊 Tabla de Referencia Rápida

| Uso | Código |
|-----|--------|
| Modal básico | `<Modal isOpen={true} onClose={fn}>...</Modal>` |
| Con título | `<Modal title="Título">...</Modal>` |
| Con footer | `<Modal footer={<Button>OK</Button>}>...</Modal>` |
| Tamaño pequeño | `<Modal size="sm">...</Modal>` |
| Sin botón X | `<Modal showCloseButton={false}>...</Modal>` |
| No cerrar fuera | `<Modal closeOnOverlayClick={false}>...</Modal>` |
| No cerrar ESC | `<Modal closeOnEsc={false}>...</Modal>` |

## 📄 Licencia
MIT - Libre para usar en proyectos personales y comerciales.

## 👨‍💻 Autor
Desarrollado para MATUC LTI Exercise Composer