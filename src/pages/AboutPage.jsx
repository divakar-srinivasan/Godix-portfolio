import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { teamMembers } from '../data/placeholderData'
import sampleImage from '../assets/sample-image.jpg'

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="About GODIX" title="Built for students who want to become exceptional engineers." description="We blend practical learning, mentorship, and portfolio growth into a sustainable path to readiness." />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">A modern, premium learning experience</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">The experience is designed around clarity, momentum, and long-term growth rather than short-lived instruction.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/programs" variant="primary">See programs</Button>
              <Button to="/roadmap" variant="outline">View roadmap</Button>
            </div>
          </div>
          <img src={sampleImage} alt="About placeholder" className="w-full rounded-3xl border border-slate-200 object-cover shadow-sm" />
        </Container>
      </section>
      <section className="py-20 bg-white/70">
        <Container>
          <h2 className="text-3xl font-semibold text-slate-950">Meet the team</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <h3 className="text-xl font-semibold text-slate-950">{member.name}</h3>
                <p className="mt-2 text-slate-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
