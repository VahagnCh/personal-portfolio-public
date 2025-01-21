'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

const Sidebar = () => {
  const pathname = usePathname()

  const menuItems = [
    { label: 'Blog Posts', href: '/admin/dashboard/blog' },
    { label: 'Projects', href: '/admin/dashboard/projects' }
  ]

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' })
  }

  return (
    <aside className="bg-[#212529] text-white w-64 min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-2 rounded transition-colors ${
                  pathname === item.href
                    ? 'bg-white/10 text-white'
                    : 'hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleSignOut}
        className="mt-auto w-full px-4 py-2 text-left text-red-400 hover:bg-white/5 rounded transition-colors"
      >
        Sign Out
      </button>
    </aside>
  )
}

export default Sidebar 