import { cn } from '../../utils/cn'

const variants = {
    primary:
        'bg-slate-950 text-white shadow-lg shadow-slate-950/10 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl',

    secondary:
        'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 hover:shadow-xl',

    outline:
        'border border-slate-200 bg-white/80 text-slate-900 shadow-sm backdrop-blur-md hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-lg',

    ghost:
        'bg-transparent text-slate-700 hover:-translate-y-0.5 hover:bg-slate-100',
}

export function Button({
    children,
    className = '',
    variant = 'primary',
    as: Component = 'button',
    ...props
}) {
    return (
        <Component
            className={cn(
                'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:scale-[0.98]',
                variants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}