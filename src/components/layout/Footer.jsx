import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { FOOTER_LINKS } from '../../constants/navigation'
import logo from '../../assets/godix.png'

export function Footer() {
    return (
        <footer className="border-t border-slate-200/70 bg-slate-950 py-12 text-slate-300">
            <Container>
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="GODIX logo" className="h-10 w-auto" />
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-400">
                            Learn from Developers. Build Real Projects. Become Industry-Ready.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</p>
                        <div className="mt-4 space-y-2 text-sm">
                            <p>
                                <a href="mailto:info@godix.in" className="transition-colors hover:text-white">
                                    info@godix.in
                                </a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com/company/godix/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                                    LinkedIn
                                </a>
                            </p>
                            <p>www.godix.in</p>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Legal</p>
                        <div className="mt-4 space-y-2 text-sm">
                            {FOOTER_LINKS.map((item) => (
                                <p key={item.to}>
                                    <Link to={item.to} className="transition-colors hover:text-white">
                                        {item.label}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; 2024 GODIX. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}
