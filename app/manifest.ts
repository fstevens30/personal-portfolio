import type { MetadataRoute } from 'next'

export default function manifest (): MetadataRoute.Manifest {
  return {
    name: 'Flynn Stevens',
    short_name: 'Flynn Stevens',
    description: 'Personal portfolio website for Flynn Stevens',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: []
  }
}
