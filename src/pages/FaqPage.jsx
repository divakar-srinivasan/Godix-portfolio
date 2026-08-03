import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { faqs } from '../data/placeholderData'

export default function FaqPage() {
  return (
    <div>
      <PageHeader eyebrow="FAQ" title="Clear answers for curious students" description="A concise FAQ section designed to scale with future questions." />
      <section className="py-20">
        <Container className="grid gap-6">
          {faqs.map((item) => (
            <Card key={item.question}>
              <h2 className="text-xl font-semibold text-slate-950">{item.question}</h2>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </Card>
          ))}
        </Container>
      </section>
    </div>
  )
}
