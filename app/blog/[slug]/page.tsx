import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Mdx } from '@/components/Mdx'

interface PageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams (slug: string) {
  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) notFound()

  return post
}

const page = async ({ params }: PageProps) => {
  const post = await getPostFromParams(params.slug)

  return <Mdx code={post.body.code} />
}

export default page
