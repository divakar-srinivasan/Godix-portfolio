import { cn } from '../../utils/cn'

export function Container({ children, className = '' }) {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-14',
                className,
            )}
        >
            {children}
        </div>
    )
}