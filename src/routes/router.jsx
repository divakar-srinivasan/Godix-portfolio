import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Loading } from '../components/ui/Loading'

const HomePage = lazy(() => import('../pages/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ProgramsPage = lazy(() => import('../pages/ProgramsPage'))
const RoadmapPage = lazy(() => import('../pages/RoadmapPage'))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'))
const TestimonialsPage = lazy(() => import('../pages/TestimonialsPage'))
const CollegesPage = lazy(() => import('../pages/CollegesPage'))
const GalleryPage = lazy(() => import('../pages/GalleryPage'))
const FaqPage = lazy(() => import('../pages/FaqPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('../pages/TermsPage'))

const withSuspense = (Element) => (
    <Suspense fallback={<Loading />}>
        <Element />
    </Suspense>
)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: withSuspense(HomePage) },
            { path: 'about', element: withSuspense(AboutPage) },
            { path: 'programs', element: withSuspense(ProgramsPage) },
            { path: 'career-development', element: withSuspense(RoadmapPage) },
            { path: 'projects', element: withSuspense(ProjectsPage) },
            { path: 'testimonials', element: withSuspense(TestimonialsPage) },
            { path: 'colleges', element: withSuspense(CollegesPage) },
            { path: 'gallery', element: withSuspense(GalleryPage) },
            { path: 'faq', element: withSuspense(FaqPage) },
            { path: 'contact', element: withSuspense(ContactPage) },
            { path: 'privacy-policy', element: withSuspense(PrivacyPolicyPage) },
            { path: 'terms', element: withSuspense(TermsPage) },
            { path: '*', element: <Navigate to="/" replace /> },
        ],
    },
])
