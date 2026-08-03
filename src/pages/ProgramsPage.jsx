import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { programs } from '../data/placeholderData'

export default function ProgramsPage() {
  return (
    <div>
      <PageHeader eyebrow="Programs" title="Practical learning tracks for real growth" description="Each program combines concept clarity, project execution, and career readiness." />
      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          {programs.map((program) => (
            <Card key={program.title}>
              <h2 className="text-2xl font-semibold text-slate-950">{program.title}</h2>
              <p className="mt-3 text-slate-600">{program.description}</p>
            </Card>
          ))}
        </Container>
      </section>
    </div>
  )
}
