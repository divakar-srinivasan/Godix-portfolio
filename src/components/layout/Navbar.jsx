import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container } from '../ui/Container'
import { NAV_ITEMS } from '../../constants/navigation'
import logo from '../../assets/godix.png'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRef = useRef(null)
    const menuRef = useRef(null)
    const wasOpenRef = useRef(false)
    const menuId = 'mobile-navigation'

    // Close the menu on Escape and restore focus to the trigger button.
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault()
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    // Move focus into the menu when it opens; restore focus to the
    // trigger button when it closes.
    useEffect(() => {
        if (isOpen) {
            const firstLink = menuRef.current?.querySelector('a, button')
            firstLink?.focus()
        } else if (wasOpenRef.current) {
            buttonRef.current?.focus()
        }

        wasOpenRef.current = isOpen
    }, [isOpen])

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
            <Container className="flex items-center justify-between py-4">
                <Link
                    to="/"
                    className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4"
                    aria-label="GODIX home"
                >
                    <img src={logo} alt="GODIX logo" className="h-10 w-auto" />
                </Link>

                {/* Desktop navigation (unchanged) */}
                <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `rounded-sm text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4 ${isActive ? 'text-sky-600' : 'text-slate-600 hover:text-slate-950'}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <button
                    ref={buttonRef}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 md:hidden"
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    )}
                </button>
            </Container>

            {/* Mobile navigation menu */}
            {isOpen && (
                <nav
                    id={menuId}
                    ref={menuRef}
                    className="border-t border-slate-200/70 bg-white md:hidden"
                    aria-label="Mobile navigation"
                >
                    <Container className="flex flex-col gap-1 py-3">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 ${isActive ? 'bg-sky-50 text-sky-600' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </Container>
                </nav>
            )}
        </header>
    )
}
