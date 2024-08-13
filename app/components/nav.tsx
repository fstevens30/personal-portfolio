export default function Nav () {
  return (
    <nav className='bg-transparent p-4 flex justify-center'>
      <ul className='flex space-x-8'>
        <li>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-800 hover:underline underline-offset-8'
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-800 hover:underline underline-offset-8'
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-800 hover:underline underline-offset-8'
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}
