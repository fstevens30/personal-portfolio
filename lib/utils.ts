import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Post } from '#site/content'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate (date: string | number): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function sortPosts (posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}
