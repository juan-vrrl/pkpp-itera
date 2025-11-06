"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const dropdownMenus = {
  profile: [
    { name: "Tentang", href: "/tentang" },
    { name: "Visi & Misi", href: "/visi-misi" },
    { name: "Tugas Pokok", href: "/tugas-pokok" },
    { name: "Struktur Organisasi", href: "/struktur-organisasi" },
    { name: "SDM", href: "/sdm" },
    { name: "Program Kerja", href: "/program-kerja" },
  ],
} as const

type DropdownKey = keyof typeof dropdownMenus

const navigation: Array<
  | { name: string; href: string; dropdownItems?: never }
  | { name: string; dropdownItems: DropdownKey; href?: never }
> = [
  { name: "Beranda", href: "/" },
  { name: "Profil", dropdownItems: "profile" },
  { name: "Informasi", href: "" },
  { name: "Berita", href: "/" },
  { name: "Kontak", href: "#kontak" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!mounted) {
    return (
      <header className="sticky px-4 lg:px-8 top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex h-16 items-center justify-between px-[15%]">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">PKPP ITERA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <span key={item.name} className="text-sm font-medium text-muted-foreground">
                {item.name}
              </span>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="default" size="lg" className="bg-[#E84545]">
              Masuk
            </Button>
            <button className="md:hidden p-2 rounded-md" aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky px-4 lg:px-8 top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-[15%]">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <button onClick={() => router.push("/")} className="flex items-center space-x-2 cursor-pointer">
            <Image src="/Logo1.png" alt="PKPP ITERA Logo" width={45} height={45} />
            <span className="text-2xl font-bold text-primary">PKPP ITERA</span>
          </button>
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              className="relative"
              onMouseEnter={() => {
                if (item.dropdownItems) {
                  setOpenDropdown(item.name)
                }
              }}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => {
                  if (item.dropdownItems) {
                    return
                  }
                  if (item.href) {
                    if (item.href.startsWith("#")) {
                      if (pathname === "/") {
                        const section = document.querySelector(item.href)
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" })
                        }
                      } else {
                        router.push(`/${item.href}`)
                      }
                    } else {
                      router.push(item.href)
                    }
                  }
                }}
                className={cn(
                  "text-sm font-medium transition-colors relative flex items-center gap-1",
                  item.dropdownItems ? "cursor-default" : "cursor-pointer hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
                {item.dropdownItems && (
                  <motion.div
                    animate={{
                      rotate: openDropdown === item.name ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                )}
                {pathname === item.href && !item.dropdownItems && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeLink"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {item.dropdownItems && openDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dropdownMenus[item.dropdownItems].map((dropdownItem, dropdownIndex) => (
                      <motion.button
                        key={dropdownItem.name}
                        onClick={() => {
                          router.push(dropdownItem.href)
                          setOpenDropdown(null)
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: dropdownIndex * 0.05,
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        {dropdownItem.name}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.nav>

        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="cursor-pointer bg-[#E84545] text-shadow-white hover:bg-[#da6d6d]"
              onClick={() => router.push("/admin/login")}
              variant="default"
              size="lg"
            >
              Masuk
            </Button>
          </motion.div>

          <motion.button
            className="md:hidden p-2 rounded-md hover:bg-accent cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </header>
  )
}
