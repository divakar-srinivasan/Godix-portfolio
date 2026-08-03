import { Link, NavLink } from 'react-router-dom'
import { Container } from '../ui/Container'
import { NAV_ITEMS } from '../../constants/navigation'
import logo from '../../assets/logo.png'

export function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
            <Container className="flex items-center justify-between py-4">
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="GODIX logo" className="h-10 w-auto" />
                    <span className="text-lg font-semibold tracking-tight text-slate-950">GODIX</span>
                </Link>
                <nav className="hidden items-center gap-6 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors ${isActive ? 'text-sky-600' : 'text-slate-600 hover:text-slate-950'}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </Container>
        </header>
    )
}
