# VideoPlayer Component - Documentación Completa

## 📋 Descripción
Componente universal de video player para React que soporta YouTube y Vimeo con detección automática, lazy loading y controles personalizables.

## ✨ Características Principales
- ✅ **Soporte para YouTube y Vimeo**
- ✅ **Detección automática** de plataforma desde URL
- ✅ **Responsive** (se adapta al contenedor)
- ✅ **4 aspect ratios** predefinidos (16:9, 4:3, 1:1, 21:9)
- ✅ **Lazy loading** con thumbnail preview
- ✅ **Botón de play** hermoso
- ✅ **Autoplay, loop, mute** opcionales
- ✅ **Sin dependencias** externas (usa iframes nativos)
- ✅ **TypeScript estricto**
- ✅ **Accesibilidad** (ARIA labels)

## 📦 Instalación

### 1. Verificar lucide-react
```bash
npm install lucide-react
```

### 2. Copiar archivos
```
src/components/ui/VideoPlayer/
├── VideoPlayer.tsx
├── videoUtils.ts
├── videoPlayerStyles.ts
├── types.ts
└── index.ts
```

## 🚀 Uso Básico

### Ejemplo Simple - YouTube
```tsx
import { VideoPlayer } from '@/components/ui/VideoPlayer';

<VideoPlayer
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Mi Video de YouTube"
/>
```

### Ejemplo Simple - Vimeo
```tsx
<VideoPlayer
  url="https://vimeo.com/148751763"
  title="Mi Video de Vimeo"
/>
```

## 📝 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `url` | `string` | *requerido* | URL del video (YouTube o Vimeo) |
| `title` | `string` | `'Video'` | Título del video (para accesibilidad) |
| `aspectRatio` | `'16:9' \| '4:3' \| '1:1' \| '21:9'` | `'16:9'` | Aspect ratio del video |
| `autoplay` | `boolean` | `false` | Si el video debe auto-reproducirse |
| `loop` | `boolean` | `false` | Si el video debe estar en loop |
| `muted` | `boolean` | `false` | Si el video debe estar muteado |
| `controls` | `boolean` | `true` | Si se muestran los controles |
| `showInfo` | `boolean` | `true` | Si se muestra info del video |
| `startTime` | `number` | `undefined` | Tiempo de inicio en segundos |
| `lazy` | `boolean` | `true` | Si usar lazy loading |
| `className` | `string` | `''` | Clase CSS adicional |
| `onReady` | `() => void` | `undefined` | Callback cuando está listo |
| `onPlay` | `() => void` | `undefined` | Callback cuando inicia |
| `onEnd` | `() => void` | `undefined` | Callback cuando termina |

## 📐 Aspect Ratios

```tsx
// 16:9 - Widescreen (Default)
<VideoPlayer url="..." aspectRatio="16:9" />

// 4:3 - Standard
<VideoPlayer url="..." aspectRatio="4:3" />

// 1:1 - Square
<VideoPlayer url="..." aspectRatio="1:1" />

// 21:9 - Ultrawide
<VideoPlayer url="..." aspectRatio="21:9" />
```

## 🔗 Formatos de URL Soportados

### YouTube
```tsx
// Todos estos formatos funcionan:
"https://www.youtube.com/watch?v=VIDEO_ID"
"https://youtu.be/VIDEO_ID"
"https://www.youtube.com/embed/VIDEO_ID"
"https://www.youtube.com/v/VIDEO_ID"
"VIDEO_ID" // ID directo
```

### Vimeo
```tsx
// Todos estos formatos funcionan:
"https://vimeo.com/VIDEO_ID"
"https://player.vimeo.com/video/VIDEO_ID"
"https://vimeo.com/channels/channelname/VIDEO_ID"
"VIDEO_ID" // ID directo
```

## 💼 Casos de Uso

### 1. Video Básico con Lazy Loading
```tsx
<VideoPlayer
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Rick Roll"
/>
```

Comportamiento:
- Muestra thumbnail del video
- Botón de play sobre el thumbnail
- Al hacer clic, carga el iframe
- El usuario controla cuando se carga

### 2. Autoplay (Sin Lazy Loading)
```tsx
<VideoPlayer
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  lazy={false}
  autoplay
  muted
  title="Video Autoplay"
/>
```

⚠️ **Nota**: Autoplay solo funciona con `muted={true}` por políticas del navegador.

### 3. Video en Loop
```tsx
<VideoPlayer
  url="https://vimeo.com/148751763"
  loop
  muted
  controls={false}
  title="Video Background"
/>
```

Ideal para videos de fondo o ambientales.

### 4. Iniciar en Tiempo Específico
```tsx
<VideoPlayer
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  startTime={30}
  title="Comenzar en 30 segundos"
/>
```

### 5. Sin Información del Video
```tsx
<VideoPlayer
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  showInfo={false}
/>
```

No muestra el título ni la plataforma debajo del video.

### 6. Galería de Videos
```tsx
const videos = [
  { url: 'https://www.youtube.com/watch?v=...', title: 'Video 1' },
  { url: 'https://vimeo.com/...', title: 'Video 2' },
  { url: 'https://youtu.be/...', title: 'Video 3' },
];

<div className="grid grid-cols-3 gap-4">
  {videos.map((video, index) => (
    <VideoPlayer
      key={index}
      url={video.url}
      title={video.title}
    />
  ))}
</div>
```

### 7. Con Callbacks
```tsx
<VideoPlayer
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  onReady={() => console.log('Video listo para reproducir')}
  onPlay={() => console.log('Video comenzó a reproducirse')}
  onEnd={() => console.log('Video terminó')}
/>
```

## 🎨 Personalización

### Estilos Personalizados
```tsx
<VideoPlayer
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  className="ring-4 ring-blue-500 shadow-2xl"
/>
```

### Layout Personalizado
```tsx
<div className="max-w-4xl mx-auto">
  <VideoPlayer
    url="https://vimeo.com/148751763"
    aspectRatio="16:9"
  />
  <div className="mt-4 p-4 bg-gray-100 rounded">
    <h3 className="font-bold">Descripción del Video</h3>
    <p>Contenido adicional aquí...</p>
  </div>
</div>
```

## 🔧 Utilidades

### Validar URL
```tsx
import { isValidVideoUrl } from '@/components/ui/VideoPlayer';

const url = 'https://www.youtube.com/watch?v=...';

if (isValidVideoUrl(url)) {
  console.log('URL válida');
} else {
  console.log('URL inválida');
}
```

### Detectar Plataforma
```tsx
import { detectPlatform } from '@/components/ui/VideoPlayer';

const platform = detectPlatform('https://www.youtube.com/...');
console.log(platform); // 'youtube' o 'vimeo' o null
```

### Extraer ID del Video
```tsx
import { extractYouTubeId, extractVimeoId } from '@/components/ui/VideoPlayer';

const ytId = extractYouTubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
console.log(ytId); // 'dQw4w9WgXcQ'

const vimeoId = extractVimeoId('https://vimeo.com/148751763');
console.log(vimeoId); // '148751763'
```

### Parsear URL Completa
```tsx
import { parseVideoUrl } from '@/components/ui/VideoPlayer';

const videoInfo = parseVideoUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

console.log(videoInfo);
// {
//   platform: 'youtube',
//   videoId: 'dQw4w9WgXcQ',
//   thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
//   embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
// }
```

## 🎭 Comportamiento de Lazy Loading

### Con Lazy Loading (Default)
1. Muestra thumbnail del video
2. Muestra botón de play
3. Usuario hace clic
4. Carga el iframe
5. Video se reproduce

**Ventajas**:
- Carga más rápida de la página
- Ahorra ancho de banda
- Mejor rendimiento
- Usuario decide cuándo cargar

### Sin Lazy Loading
```tsx
<VideoPlayer url="..." lazy={false} />
```

1. Carga el iframe inmediatamente
2. Video visible desde el inicio

**Ventajas**:
- Reproducción inmediata
- Útil para autoplay

## ⚠️ Notas Importantes

### Autoplay
- **Solo funciona con `muted={true}`**
- Requiere `lazy={false}`
- Políticas del navegador restringen autoplay con sonido

```tsx
// ✅ Funciona
<VideoPlayer url="..." lazy={false} autoplay muted />

// ❌ No funciona (navegador bloquea)
<VideoPlayer url="..." lazy={false} autoplay />
```

### Vimeo Thumbnails
- Vimeo no proporciona URLs directos de thumbnails
- El componente usa un servicio de terceros (vumbnail.com)
- Para thumbnails oficiales, necesitarías la API de Vimeo

### CORS y Restricciones
- Algunos videos pueden tener restricciones de embedding
- Algunos videos pueden estar restringidos por región
- El componente mostrará un error si el video no se puede cargar

## 🧪 Testing

### Verificar que Funciona
```tsx
import { render, screen } from '@testing-library/react';
import { VideoPlayer } from './VideoPlayer';

test('renderiza video de YouTube', () => {
  render(
    <VideoPlayer
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      title="Test Video"
    />
  );

  expect(screen.getByAltText('Test Video')).toBeInTheDocument();
});

test('valida URL inválida', () => {
  render(<VideoPlayer url="https://invalid-url.com" />);
  
  expect(screen.getByText(/Error al cargar/)).toBeInTheDocument();
});
```

## 🔍 Troubleshooting

### El video no se muestra
**Solución**: Verifica que la URL sea válida de YouTube o Vimeo

### El autoplay no funciona
**Solución**: Agrega `muted={true}` y `lazy={false}`

### El thumbnail no se muestra
**Solución**: Puede ser una restricción del video o ID inválido

### El video se ve distorsionado
**Solución**: Ajusta el `aspectRatio` correcto

## 📊 Tabla de Referencia Rápida

| Uso | Código |
|-----|--------|
| YouTube básico | `<VideoPlayer url="https://youtube.com/..." />` |
| Vimeo básico | `<VideoPlayer url="https://vimeo.com/..." />` |
| Autoplay | `<VideoPlayer lazy={false} autoplay muted />` |
| Loop | `<VideoPlayer loop />` |
| Sin controles | `<VideoPlayer controls={false} />` |
| Aspect ratio | `<VideoPlayer aspectRatio="16:9" />` |
| Inicio en 30s | `<VideoPlayer startTime={30} />` |
| Sin info | `<VideoPlayer showInfo={false} />` |

## 📄 Licencia
MIT - Libre para usar en proyectos personales y comerciales.

## 👨‍💻 Autor
Desarrollado para MATUC LTI Exercise Composer
