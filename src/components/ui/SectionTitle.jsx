import { TYPOGRAPHY } from '../../constants/typography'
import { cn } from '../../utils/cn'

export function SectionTitle({
    eyebrow,
    title,
    description,
    align = 'left',
    className = '',
}) {
    return (
        <div
            className={cn(
                'max-w-4xl',
                align === 'center'
                    ? 'mx-auto text-center'
                    : 'text-left',
                className,
            )}
        >
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

            <h2
                className={cn(
                    TYPOGRAPHY.sectionTitle,
                    'mt-5 text-4xl font-bold tracking-tight sm:text-5xl',
                )}
            >
                {title}
            </h2>

            {description ? (
                <p
                    className={cn(
                        TYPOGRAPHY.subtitle,
                        'mt-5 max-w-3xl leading-8',
                        align === 'center' ? 'mx-auto' : '',
                    )}
                >
                    {description}
                </p>
            ) : null}
        </div>
    )
}