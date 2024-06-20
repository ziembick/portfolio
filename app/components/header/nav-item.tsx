import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './header.sass'
import { cn } from '@/app/lib/utils'

type NavItemProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn('link-container', isActive && 'text-gray-100', 'hover:text-customPurple', 'font-mono')}
    >
      <span className='text-customPurple shadow-button'>#</span> {label}
    </Link>
  )
}
