import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Flynn Stevens',
  description: 'Blog Posts'
}

export default function Blog () {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1>Blog Page</h1>
      </main>
    </>
  )
}
