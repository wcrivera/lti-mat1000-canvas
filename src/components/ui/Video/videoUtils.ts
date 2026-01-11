import type { VideoInfo, VideoPlatform } from './types';

/**
 * Extrae el ID de un video de YouTube desde diferentes formatos de URL
 * 
 * Formatos soportados:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/v/VIDEO_ID
 */
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // ID directo
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}


export function extractVimeoId(url: string): string | null {
  const patterns = [
    /vimeo\.com\/(\d+)/,
    /player\.vimeo\.com\/video\/(\d+)/,
    /^(\d+)$/, // ID directo
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Detecta la plataforma del video desde la URL
 */
export function detectPlatform(url: string): VideoPlatform | null {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  if (url.includes('vimeo.com')) {
    return 'vimeo';
  }
  
  // Intentar detectar por patrón de ID
  if (extractYouTubeId(url)) {
    return 'youtube';
  }
  if (extractVimeoId(url)) {
    return 'vimeo';
  }

  return null;
}

/**
 * Genera la URL del thumbnail para YouTube
 */
export function getYouTubeThumbnail(videoId: string, quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'hq'): string {
  const qualityMap = {
    default: 'default',
    mq: 'mqdefault',
    hq: 'hqdefault',
    sd: 'sddefault',
    maxres: 'maxresdefault',
  };

  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

/**
 * Genera la URL del thumbnail para Vimeo
 * Nota: Vimeo requiere una llamada API para obtener el thumbnail real
 * Esta es una aproximación usando el player
 */
export function getVimeoThumbnail(videoId: string): string {
  // Vimeo no proporciona thumbnails directos sin API
  // Usamos una imagen de placeholder o podríamos hacer fetch a la API
  return `https://vumbnail.com/${videoId}.jpg`;
}

/**
 * Genera la URL de embed para YouTube
 */
export function getYouTubeEmbedUrl(
  videoId: string,
  options: {
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    showInfo?: boolean;
    startTime?: number;
    fullscreen?: boolean;
    rel?: 0 | 1;
    ccLoadPolicy?: 0 | 1;
    ivLoadPolicy?: 1 | 3;
    hl?: string;
    modestbranding?: 0 | 1;
    color?: 'red' | 'white';
    disablekb?: 0 | 1;
    enablejsapi?: 0 | 1;
    end?: number;
    playlist?: string;
  } = {}
): string {
  const params = new URLSearchParams();

  // Opciones básicas
  if (options.autoplay) params.set('autoplay', '1');
  if (options.loop) {
    params.set('loop', '1');
    params.set('playlist', options.playlist || videoId); // Requerido para loop
  }
  if (options.muted) params.set('mute', '1');
  if (options.controls === false) params.set('controls', '0');
  if (options.showInfo === false) params.set('modestbranding', '1');
  if (options.startTime) params.set('start', options.startTime.toString());

  // Opciones avanzadas de YouTube
  if (options.fullscreen === false) params.set('fs', '0');
  if (options.rel !== undefined) params.set('rel', options.rel.toString());
  if (options.ccLoadPolicy !== undefined) params.set('cc_load_policy', options.ccLoadPolicy.toString());
  if (options.ivLoadPolicy !== undefined) params.set('iv_load_policy', options.ivLoadPolicy.toString());
  if (options.hl) params.set('hl', options.hl);
  if (options.modestbranding !== undefined) params.set('modestbranding', options.modestbranding.toString());
  if (options.color) params.set('color', options.color);
  if (options.disablekb !== undefined) params.set('disablekb', options.disablekb.toString());
  if (options.enablejsapi !== undefined) params.set('enablejsapi', options.enablejsapi.toString());
  if (options.end) params.set('end', options.end.toString());
  if (options.playlist && !options.loop) params.set('playlist', options.playlist);

  const queryString = params.toString();
  return `https://www.youtube.com/embed/${videoId}${queryString ? `?${queryString}` : ''}`;
}

/**
 * Genera la URL de embed para Vimeo
 */
export function getVimeoEmbedUrl(
  videoId: string,
  options: {
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    showInfo?: boolean;
    fullscreen?: boolean;
    title?: boolean;
    byline?: boolean;
    portrait?: boolean;
    color?: string;
    pip?: boolean;
    speed?: boolean;
    quality?: boolean;
    background?: boolean;
    transparent?: boolean;
    texttrack?: string;
    dnt?: boolean;
  } = {}
): string {
  const params = new URLSearchParams();

  // Opciones básicas
  if (options.autoplay) params.set('autoplay', '1');
  if (options.loop) params.set('loop', '1');
  if (options.muted) params.set('muted', '1');
  if (options.controls === false) params.set('controls', '0');

  // Opciones de información del video
  if (options.showInfo === false || options.title === false) {
    params.set('title', '0');
  }
  if (options.showInfo === false || options.byline === false) {
    params.set('byline', '0');
  }
  if (options.showInfo === false || options.portrait === false) {
    params.set('portrait', '0');
  }

  // Opciones avanzadas de Vimeo
  if (options.fullscreen === false) params.set('fullscreen', '0');
  if (options.color) params.set('color', options.color.replace('#', ''));
  if (options.pip === false) params.set('pip', '0');
  if (options.speed) params.set('speed', '1');
  if (options.quality) params.set('quality', 'auto');
  if (options.background) params.set('background', '1');
  if (options.transparent) params.set('transparent', '1');
  if (options.texttrack) params.set('texttrack', options.texttrack);
  if (options.dnt) params.set('dnt', '1');

  const queryString = params.toString();
  return `https://player.vimeo.com/video/${videoId}${queryString ? `?${queryString}` : ''}`;
}

/**
 * Parsea una URL de video y extrae toda la información necesaria
 */
export function parseVideoUrl(
  url: string,
  options: {
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    showInfo?: boolean;
    startTime?: number;
    vimeoOptions?: any;
    youtubeOptions?: any;
  } = {}
): VideoInfo | null {
  const platform = detectPlatform(url);

  if (!platform) {
    console.error('No se pudo detectar la plataforma del video:', url);
    return null;
  }

  if (platform === 'youtube') {
    const videoId = extractYouTubeId(url);
    if (!videoId) {
      console.error('No se pudo extraer el ID de YouTube:', url);
      return null;
    }

    return {
      platform: 'youtube',
      videoId,
      thumbnailUrl: getYouTubeThumbnail(videoId),
      embedUrl: getYouTubeEmbedUrl(videoId, {
        ...options,
        ...options.youtubeOptions,
      }),
    };
  }

  if (platform === 'vimeo') {
    const videoId = extractVimeoId(url);
    if (!videoId) {
      console.error('No se pudo extraer el ID de Vimeo:', url);
      return null;
    }

    return {
      platform: 'vimeo',
      videoId,
      thumbnailUrl: getVimeoThumbnail(videoId),
      embedUrl: getVimeoEmbedUrl(videoId, {
        ...options,
        ...options.vimeoOptions,
      }),
    };
  }

  return null;
}

/**
 * Valida si una URL es válida de YouTube o Vimeo
 */
export function isValidVideoUrl(url: string): boolean {
  return detectPlatform(url) !== null;
}