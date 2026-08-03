import { cn } from '../../utils/cn'

export function Container({ children, className = '' }) {
    return <div className={cn('mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10', className)}>{children}</div>
}
