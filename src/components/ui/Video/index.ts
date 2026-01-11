export { VideoPlayer } from './VideoPlayer';
export type { VideoPlayerProps, VideoPlatform, AspectRatio, VideoInfo } from './types';
export {
  parseVideoUrl,
  isValidVideoUrl,
  detectPlatform,
  extractYouTubeId,
  extractVimeoId,
} from './videoUtils';
export { ASPECT_RATIO_CONFIG } from './videoPlayerStyles';
