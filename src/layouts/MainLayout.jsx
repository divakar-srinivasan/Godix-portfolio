import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ScrollToTop } from '../components/common/ScrollToTop'

export function MainLayout() {
    const handleSkipToContent = (event) => {
        const mainContent = document.getElementById('main-content')

        if (mainContent) {
            event.preventDefault()
            mainContent.focus()
            mainContent.scrollIntoView()
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <a
                href="#main-content"
                className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-slate-950 px-4 py-3 text-sm font-medium text-white focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                onClick={handleSkipToContent}
            >
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}
