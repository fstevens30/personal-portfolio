import { types } from 'util'

export const siteConfig = {
  name: 'Flynn Stevens',
  url: 'https://flynn-stevens.com',
  description: 'My personal portfolio and blog.',
  author: 'Flynn Stevens',
  links: {
    twitter: 'https://x.com/FlynnStevens30',
    github: 'https://github.com/fstevens30',
    linkedin: 'https://www.linkedin.com/in/fstevens30/',
    youtube: 'https://www.youtube.com/@flynnstevens8211',
    bluesky: 'https://bsky.app/profile/flynnstevens.dev'
  },
  tech: {
    swift: 'Swift',
    typescript: 'TypeScript',
    react: 'React',
    nextjs: 'Next.js',
    tailwindcss: 'Tailwind CSS',
    supabase: 'Supabase',
    csharp: 'C#',
    openstreetmap: 'OpenStreetMap',
    maplibre: 'maplibre'
  }
}

export type TechKeys = keyof typeof siteConfig.tech

export type SiteConfig = typeof siteConfig
