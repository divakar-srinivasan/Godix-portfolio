import { TYPOGRAPHY } from '../../constants/typography'
import { cn } from '../../utils/cn'

export function SectionTitle({ eyebrow, title, description, align = 'left', className = '' }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow ? <p className={TYPOGRAPHY.label}>{eyebrow}</p> : null}
      <h2 className={cn(TYPOGRAPHY.sectionTitle, 'mt-3')}>{title}</h2>
      {description ? <p className={cn(TYPOGRAPHY.subtitle, 'mt-4')}>{description}</p> : null}
    </div>
  )
}
