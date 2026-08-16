import { cn } from '../../utils/cn'

export function Card({ children, className = '' }) {
    return (
        <div
            className={cn(
                'group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-7 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl',
                className,
            )}
        >
            {children}
        </div>
    )
}