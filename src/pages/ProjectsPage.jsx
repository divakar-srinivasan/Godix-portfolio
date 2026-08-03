import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { projects } from '../data/placeholderData'

export default function ProjectsPage() {
    return (
        <div>
            <PageHeader eyebrow="Projects" title="Portfolio-ready experiences that matter" description="Projects are built to demonstrate thinking, craft, and execution." />
            <section className="py-20">
                <Container className="grid gap-6 lg:grid-cols-2">
                    {projects.map((project) => (
                        <Card key={project.title}>
                            <h2 className="text-2xl font-semibold text-slate-950">{project.title}</h2>
                            <p className="mt-3 text-slate-600">{project.description}</p>
                        </Card>
                    ))}
                </Container>
            </section>
        </div>
    )
}
