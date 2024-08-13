import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type LinkButtonProps = {
  href: string
  text: string
}

export default function LinkButton ({ href, text }: LinkButtonProps) {
  return (
    <li>
      <a href={href}>
        <button
          type='button'
          className='flex items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-800 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          <span>{text}</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2' />
        </button>
      </a>
    </li>
  )
}
