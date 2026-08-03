import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { testimonials } from '../data/placeholderData'

export default function TestimonialsPage() {
    return (
        <div>
            <PageHeader eyebrow="Testimonials" title="Proof that focused guidance creates momentum" description="Student experiences highlight the value of structure and support." />
            <section className="py-20">
                <Container className="grid gap-6 lg:grid-cols-2">
                    {testimonials.map((item) => (
                        <Card key={item.name}>
                            <p className="text-slate-700">“{item.quote}”</p>
                            <div className="mt-6">
                                <p className="font-semibold text-slate-950">{item.name}</p>
                                <p className="text-sm text-slate-500">{item.role}</p>
                            </div>
                        </Card>
                    ))}
                </Container>
            </section>
        </div>
    )
}
