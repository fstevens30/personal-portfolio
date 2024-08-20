import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import { sortPosts } from '@/lib/utils'

export default async function BlogPage () {
  const sortedPosts = sortPosts(posts.filter(post => post.published))

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 '>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>Blog</h1>
          <p className='text-xl text-muted-foreground'>
            A collection of my random thoughts and ideas.
          </p>
        </div>
      </div>
      <hr className='mt-8' />
      {sortedPosts?.length > 0 ? (
        <ul className='flex flex-col'>
          {sortedPosts.map(post => {
            const { slug, title, description, date } = post
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  title={title}
                  description={description}
                  date={date}
                />
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No posts to display, check back later.</p>
      )}
    </div>
  )
}
