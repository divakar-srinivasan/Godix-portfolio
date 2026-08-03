import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

const roadmapItems = [
  { title: 'Foundation', description: 'Build fluency in the core tools, concepts, and habits of modern engineering.' },
  { title: 'Application', description: 'Practice through guided projects and problem-solving exercises.' },
  { title: 'Career Readiness', description: 'Prepare for internships, interviews, and professional collaboration.' },
]

export default function RoadmapPage() {
  return (
    <div>
      <PageHeader eyebrow="Roadmap" title="A structured path from learning to readiness" description="The roadmap is intentionally progressive and future-focused." />
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {roadmapItems.map((item) => (
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
