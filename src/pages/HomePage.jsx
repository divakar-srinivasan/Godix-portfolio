import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import sampleImage from '../assets/sample.jpg'
import {
    learningDomains,
    studentJourney,
    projectTopics,
    mentorshipTopics,
    learningOutcomes,
    faqs,
} from '../data/placeholderData'

export default function HomePage() {
    return (
        <div className="pb-24">
            <section className="py-20 sm:py-28">
                <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">GODIX</p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Learn from Developers.
                            <span className="mt-2 block">Build Real Projects.</span>
                            <span className="mt-2 block">Become Industry-Ready.</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            GODIX is an industry-led developer community that helps students grow through developer mentorship, project-based learning, practical development, code review, and continuous learning.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button as={Link} to="/programs" variant="primary">Explore Programs</Button>
                        </div>
                    </div>

                    <div>
                        <img
                            src={sampleImage}
                            alt="GODIX learning community"
                            width="1920"
                            height="1080"
                            decoding="async"
                            fetchPriority="high"
                            className="w-full rounded-3xl border border-slate-200 object-cover shadow-sm"
                        />
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600">Why GODIX</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Why GODIX?</h2>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-5 text-slate-600">
                            <p>Traditional learning often focuses on theory.</p>
                            <p>GODIX focuses on practical development and project-based learning.</p>
                            <p>
                                Students learn by building, collaborating, receiving code review, and understanding how software development works in practice.
                            </p>
                        </div>

                        <Card>
                            <ul className="space-y-3 text-slate-700">
                                <li>Practical development</li>
                                <li>Developer mentorship</li>
                                <li>Project-based learning</li>
                                <li>Career preparation</li>
                            </ul>
                        </Card>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600">Learning</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Learning Domains</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {learningDomains.map((item) => (
                            <Card key={item.title}>
                                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-slate-600">{item.description}</p>
                                <p className="mt-4 text-sm font-medium text-sky-700">{item.objective}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600">Progress</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Your Learning Journey</h2>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {studentJourney.map((step) => (
                            <Card key={step} className="text-sm text-slate-700">
                                <p className="font-medium text-slate-950">{step}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600">Practice</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Learn by Building</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {projectTopics.map((item) => (
                            <Card key={item.title}>
                                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-slate-600">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600">Mentorship</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Learn from Industry Mentors</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {mentorshipTopics.map((item) => (
                            <Card key={item.title}>
                                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-slate-600">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600">Outcomes</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">What You'll Develop</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {learningOutcomes.map((item) => (
                            <Card key={item.title}>
                                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-slate-600">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600">FAQ</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Frequently Asked Questions</h2>
                    </div>

                    <div className="mt-10 space-y-4">
                        {faqs.map((item) => (
                            <Card key={item.question}>
                                <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                                <p className="mt-3 text-slate-600">{item.answer}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <Card className="text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600">Next Step</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Start Your Development Journey</h2>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Button as={Link} to="/programs" variant="primary">Explore Programs</Button>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    )
}
