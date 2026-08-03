// Utility helpers for composing Tailwind class names in a predictable way.
export function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}
