import { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import BlogCard from '@/components/blog-card'

export const metadata: Metadata = {
  title: 'Blog | Flynn Stevens',
  description: 'A collection of blog posts, just random thoughts and ideas.'
}

export default function Blog () {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center p-24'>
        <h1>Blog Page</h1>
        <h2>A collection of blog posts, just random thoughts and ideas.</h2>

        <div className='flex justify-center flex-wrap gap-4 mt-8'>
          {allPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  )
}
