import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { fadeUp } from '../animations'
import { programs, projects, statistics, testimonials } from '../data/placeholderData'
import sampleImage from '../assets/sample-image.jpg'

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.16),_transparent_45%)] py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">GODIX</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Build industry-ready engineering skills with clarity and momentum.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help students move from classroom learning to real-world software engineering through practical mentorship, projects, and career guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/programs" variant="primary">Explore programs</Button>
              <Button as={Link} to="/about" variant="outline">Learn more</Button>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <img src={sampleImage} alt="Placeholder hero" className="w-full rounded-3xl border border-slate-200 object-cover shadow-sm" />
          </motion.div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle eyebrow="Why it matters" title="A platform for practical growth" description="Every experience is built to help students become confident, job-ready software engineers." align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {statistics.map((stat) => (
              <Card key={stat.label} className="text-center">
                <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white/70">
        <Container>
          <SectionTitle eyebrow="Programs" title="Structured pathways for modern engineering learners" description="Designed to be practical, flexible, and future-ready." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.title}>
                <h3 className="text-xl font-semibold text-slate-950">{program.title}</h3>
                <p className="mt-3 text-slate-600">{program.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle eyebrow="Highlights" title="Projects and stories that create momentum" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title}>
                <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-3 text-slate-600">{project.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white/70">
        <Container>
          <SectionTitle eyebrow="Testimonials" title="Students trust the process" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <p className="text-slate-700">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-950">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
