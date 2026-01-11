/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string
  // Agrega más variables aquí si las necesitas
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
