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
    youtube: 'https://www.youtube.com/@flynnstevens8211'
  },
  tech: {
    swift: 'Swift',
    typescript: 'TypeScript',
    django: 'Django',
    react: 'React',
    nextjs: 'Next.js',
    html5: 'HTML5',
    vscode: 'VS Code',
    xcode: 'Xcode',
    tailwindcss: 'Tailwind CSS',
    supabase: 'Supabase',
    css3: 'CSS3',
    javascript: 'JavaScript'
  }
}

export type TechKeys = keyof typeof siteConfig.tech

export type SiteConfig = typeof siteConfig
