import { cn } from '../../utils/cn'

export function Card({ children, className = '' }) {
    return <div className={cn('rounded-3xl border border-slate-200 bg-white p-6 shadow-sm', className)}>{children}</div>
}
