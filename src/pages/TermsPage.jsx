import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

export default function TermsPage() {
  return (
    <div>
      <PageHeader eyebrow="Terms" title="Terms of use" description="This is a placeholder terms page for future legal content." />
      <section className="py-20">
        <Container>
          <Card>
            <p className="text-slate-600">The final legal terms will be added once product and policy requirements are finalized.</p>
          </Card>
        </Container>
      </section>
    </div>
  )
}
