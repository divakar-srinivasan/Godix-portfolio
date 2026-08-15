import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

export default function ContactPage() {
    return (
        <div>
            <PageHeader eyebrow="Contact" title="Start a conversation with GODIX" description="Reach out for program exploration, developer mentorship, project-based learning, career preparation, or questions about the GODIX community." />
            <section className="py-20">
                <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Contact information</h2>
                        <p className="mt-4 text-slate-600">We usually respond within 24–48 hours.</p>
                        <div className="mt-8 space-y-4">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Email</p>
                                <p className="mt-2 text-slate-600"><a href="mailto:info@godix.in" className="text-sky-600 hover:text-sky-700">info@godix.in</a></p>
                            </div>
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Website</p>
                                <p className="mt-2 text-slate-600">www.godix.in</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">LinkedIn</p>
                                <p className="mt-2 text-slate-600"><a href="https://www.linkedin.com/company/godix/" target="_blank" rel="noreferrer" className="text-sky-600 hover:text-sky-700">https://www.linkedin.com/company/godix/</a></p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Talk to us about</h2>
                        <p className="mt-3 text-slate-600">We are here to discuss GODIX programs, developer mentorship, project-based learning, and career preparation.</p>
                        <div className="mt-6 space-y-3 rounded-2xl bg-sky-50 p-4">
                            <p className="text-sm font-semibold text-sky-900">Preferred contact method</p>
                            <p className="text-sm text-sky-800">Email us directly at <a href="mailto:info@godix.in" className="font-medium text-sky-700 hover:text-sky-800">info@godix.in</a></p>
                            <p className="text-sm text-sky-800">Or connect with us on <a href="https://www.linkedin.com/company/godix/" target="_blank" rel="noreferrer" className="font-medium text-sky-700 hover:text-sky-800">https://www.linkedin.com/company/godix/</a></p>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    )
}
