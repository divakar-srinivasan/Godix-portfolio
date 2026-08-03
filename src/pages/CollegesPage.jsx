import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

const collegeHighlights = [
    { title: 'College Partnerships', description: 'Collaborations that bring the experience closer to student communities.' },
    { title: 'Campus Outreach', description: 'Programs designed to support campus-based growth and engagement.' },
]

export default function CollegesPage() {
    return (
        <div>
            <PageHeader eyebrow="Colleges" title="Partnering with colleges that value practical readiness" description="We collaborate with institutions that care about outcomes, not just attendance." />
            <section className="py-20">
                <Container className="grid gap-6 lg:grid-cols-2">
                    {collegeHighlights.map((item) => (
                        <Card key={item.title}>
                            <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                            <p className="mt-3 text-slate-600">{item.description}</p>
                        </Card>
                    ))}
                </Container>
            </section>
        </div>
    )
}
