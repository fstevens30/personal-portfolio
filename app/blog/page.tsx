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
      <main>
        <h1>Blog Page</h1>
        <h2>A collection of blog posts, just random thoughts and ideas.</h2>

        <div>
          {allPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  )
}
