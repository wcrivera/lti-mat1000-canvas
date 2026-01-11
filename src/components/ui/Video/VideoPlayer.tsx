import { useState, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';
import type { VideoPlayerProps } from './types';
import { parseVideoUrl, isValidVideoUrl } from './videoUtils';
import {
  ASPECT_RATIO_CONFIG,
  VIDEO_CONTAINER_STYLES,
  RESPONSIVE_WRAPPER_STYLES,
  IFRAME_STYLES,
  THUMBNAIL_STYLES,
  PLAY_BUTTON_STYLES,
  LOADING_OVERLAY_STYLES,
} from './videoPlayerStyles';

/**
 * Componente VideoPlayer universal para YouTube y Vimeo
 * 
 * Características:
 * - Soporte para YouTube y Vimeo
 * - Detección automática de plataforma
 * - Responsive con aspect ratios predefinidos
 * - Lazy loading con thumbnail preview
 * - Controles personalizables
 * - Opciones avanzadas para Vimeo y YouTube
 * - TypeScript estricto
 * - Sin dependencias externas
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  title = 'Video',
  aspectRatio = '16:9',
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  showInfo = true,
  startTime,
  lazy = true,
  className = '',
  vimeoOptions = {},
  youtubeOptions = {},
  onReady,
  onPlay,
  // onEnd,
}) => {
  const [isLoaded, setIsLoaded] = useState(!lazy);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validar URL
  useEffect(() => {
    if (!isValidVideoUrl(url)) {
      setError('URL de video inválida. Debe ser de YouTube o Vimeo.');
    } else {
      setError(null);
    }
  }, [url]);

  // Parsear información del video
  const videoInfo = parseVideoUrl(url, {
    autoplay: autoplay && isLoaded, // Solo autoplay si ya está cargado
    loop,
    muted,
    controls,
    showInfo,
    startTime,
    vimeoOptions,
    youtubeOptions,
  });

  /**
   * Maneja el click en el thumbnail para cargar el video
   */
  const handleThumbnailClick = (): void => {
    setIsLoading(true);
    setIsLoaded(true);
    onPlay?.();

    // Simular un pequeño delay para la animación
    setTimeout(() => {
      setIsLoading(false);
      onReady?.();
    }, 500);
  };

  // Si hay error, mostrar mensaje
  if (error) {
    return (
      <div className={`${VIDEO_CONTAINER_STYLES} ${className}`}>
        <div
          className={RESPONSIVE_WRAPPER_STYLES}
          style={{ paddingBottom: ASPECT_RATIO_CONFIG[aspectRatio].paddingBottom }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-red-50">
            <div className="text-center p-6">
              <p className="text-red-600 font-semibold mb-2">Error al cargar el video</p>
              <p className="text-sm text-red-500">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si no se pudo parsear el video
  if (!videoInfo) {
    return (
      <div className={`${VIDEO_CONTAINER_STYLES} ${className}`}>
        <div
          className={RESPONSIVE_WRAPPER_STYLES}
          style={{ paddingBottom: ASPECT_RATIO_CONFIG[aspectRatio].paddingBottom }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white">No se pudo cargar el video</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${VIDEO_CONTAINER_STYLES} ${className}`}>
      <div
        className={RESPONSIVE_WRAPPER_STYLES}
        style={{ paddingBottom: ASPECT_RATIO_CONFIG[aspectRatio].paddingBottom }}
      >
        {/* Thumbnail (antes de cargar) */}
        {lazy && !isLoaded && (
          <>
            <img
              src={videoInfo.thumbnailUrl}
              alt={title}
              className={THUMBNAIL_STYLES}
              onClick={handleThumbnailClick}
              loading="lazy"
            />

            {/* Botón de Play */}
            <button
              onClick={handleThumbnailClick}
              className={PLAY_BUTTON_STYLES}
              aria-label="Reproducir video"
              type="button"
            >
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </button>
          </>
        )}

        {/* Overlay de carga */}
        {isLoading && (
          <div className={LOADING_OVERLAY_STYLES}>
            <Loader2 className="w-12 h-12 text-white animate-spin" />
          </div>
        )}

        {/* Iframe del video */}
        {isLoaded && (
          <iframe
            src={videoInfo.embedUrl}
            title={title}
            className={IFRAME_STYLES}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>

      {/* Información del video (opcional) */}
      {showInfo && title && (
        <div className="p-3 bg-gray-800">
          <p className="text-white text-sm font-medium truncate">{title}</p>
          <p className="text-gray-400 text-xs mt-1 capitalize">
            {videoInfo.platform} · {ASPECT_RATIO_CONFIG[aspectRatio].label}
          </p>
        </div>
      )}
    </div>
  );
};