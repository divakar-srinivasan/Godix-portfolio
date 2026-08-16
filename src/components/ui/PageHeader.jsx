import { Container } from './Container'
import { TYPOGRAPHY } from '../../constants/typography'
import { cn } from '../../utils/cn'

export function PageHeader({ eyebrow, title, description, children }) {
    return (
        <section className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50 via-white to-slate-50/40 py-24 sm:py-28">
            <Container>
                <div className="max-w-4xl">
                    {eyebrow ? (
                        <p
                            className={cn(
                                TYPOGRAPHY.label,
                                'inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 backdrop-blur-md',
                            )}
                        >
                            {eyebrow}
                        </p>
                    ) : null}

                    <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                        {title}
                    </h1>

                    {description ? (
                        <p className={cn(TYPOGRAPHY.subtitle, 'mt-6 max-w-3xl leading-8')}>
                            {description}
                        </p>
                    ) : null}

                    {children ? (
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            {children}
                        </div>
                    ) : null}
                </div>
            </Container>
        </section>
    )
}