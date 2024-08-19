import { Post } from '@/.contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogCard ({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='flex flex-row flex-wrap gap-4 p-4 rounded-md cursor-pointer border border-gray-200'>
        <Image src={post.image} alt={post.title} width={300} height={200} />
        <div className='flex flex-col gap-2'>
          <p className='text-sm text-gray-500'>{formattedDate}</p>
          <h3 className='text-xl font-bold'>{post.title}</h3>
          <p className='text-gray-600'>{post.description}</p>
        </div>
      </div>
    </Link>
  )
}
