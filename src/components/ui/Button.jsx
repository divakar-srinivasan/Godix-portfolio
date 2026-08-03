import { cn } from '../../utils/cn'

const variants = {
    primary: 'bg-slate-950 text-white hover:bg-slate-800',
    secondary: 'bg-sky-600 text-white hover:bg-sky-500',
    outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
}

export function Button({ children, className = '', variant = 'primary', as: Component = 'button', ...props }) {
    return (
        <Component
            className={cn(
                'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                variants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
