import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefixa caminhos locais com o basePath configurado em next.config.mjs (hoje vazio). */
export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return `${basePath}${path}`
}
