'use client'

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <Link href="/" className="flex items-center hover:text-primary transition-colors">
                <span className="inline-block text-lg font-bold">Blog</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className="flex items-center hover:text-primary transition-colors">
                <span className="inline-block text-lg font-bold">About</span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
} 