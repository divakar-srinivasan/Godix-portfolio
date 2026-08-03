import { Container } from './Container'
import { TYPOGRAPHY } from '../../constants/typography'
import { cn } from '../../utils/cn'

export function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="border-b border-slate-200/80 bg-slate-50/70 py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? <p className={TYPOGRAPHY.label}>{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
          {description ? <p className={cn(TYPOGRAPHY.subtitle, 'mt-5')}>{description}</p> : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  )
}
