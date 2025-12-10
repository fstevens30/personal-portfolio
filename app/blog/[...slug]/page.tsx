import { posts } from '#site/content'
import { MDXContent } from '@/components/mdx-components'
import { notFound } from 'next/navigation'
import '@/styles/mdx.css'
import { formatDate } from '@/lib/utils'

interface PostPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams (params: { slug: string[] }) {
  const slug = params?.slug?.join('/') || ''
  const post = posts.find(post => post.slugAsParams === slug)

  return post
}

export async function generateStaticParams (): Promise<{ slug: string[] }[]> {
  return posts.map(post => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage ({ params }: PostPageProps) {
  const resolvedParams = await params
  const post = await getPostFromParams(resolvedParams)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
      <h1 className='mb-2'>{post.title}</h1>
      {post.description ? (
        <p className='text-xl mt-0 text-muted-foreground'>{post.description}</p>
      ) : null}
      <p className='m-0 text-muted-foreground'>{formatDate(post.date)}</p>
      <p className='m-0 text-muted-foreground'>{post.author}</p>
      <hr className='my-4' />
      <MDXContent code={post.body} />
    </article>
  )
}
