import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

export default function ContactPage() {
  return (
    <div>
      <PageHeader eyebrow="Contact" title="Start a conversation with GODIX" description="For partnerships, admissions, and collaborations, we are ready to connect." />
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <h2 className="text-2xl font-semibold text-slate-950">Let’s build the next step together</h2>
            <p className="mt-3 text-slate-600">Reach out if you want to explore a learning journey, partnership, or campus collaboration.</p>
          </Card>
          <Card>
            <form className="space-y-4">
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0" placeholder="Name" />
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0" placeholder="Email" />
              <textarea className="min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0" placeholder="Message" />
              <Button type="button" variant="primary">Send message</Button>
            </form>
          </Card>
        </Container>
      </section>
    </div>
  )
}
