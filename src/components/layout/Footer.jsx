import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../constants/navigation'
import logo from '../../assets/logo.png'

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-950 py-12 text-slate-300">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GODIX logo" className="h-10 w-auto" />
          <div>
            <p className="text-lg font-semibold text-white">GODIX</p>
            <p className="text-sm text-slate-400">Engineering futures through practical learning.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.to} to={item.to} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
