export function Loading() {
    return (
        <div className="flex min-h-[24rem] items-center justify-center px-6">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 px-7 py-5 shadow-xl shadow-slate-200/40 backdrop-blur-md transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-50/40 via-transparent to-indigo-50/40" />

                <div className="relative flex items-center gap-4">
                    <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-500" />
                        <span
                            className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-500"
                            style={{ animationDelay: '0.15s' }}
                        />
                        <span
                            className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-500"
                            style={{ animationDelay: '0.3s' }}
                        />
                    </div>

                    <span className="text-sm font-semibold tracking-wide text-slate-600">
                        Loading experience...
                    </span>
                </div>
            </div>
        </div>
    )
}