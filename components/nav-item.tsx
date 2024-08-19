type NavItemProps = {
  href: string
  text: string
}

export default function NavItem ({ href, text }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className='text-gray-400 hover:text-gray-800 hover:underline underline-offset-8'
      >
        {text}
      </a>
    </li>
  )
}
