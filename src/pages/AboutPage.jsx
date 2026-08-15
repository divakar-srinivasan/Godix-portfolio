import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import sampleImage from '../assets/sample.jpg'

const coreValues = [
    'Continuous learning',
    'Collaboration',
    'Practical development',
    'Technical excellence',
    'Professional growth',
]

const learningPhilosophy = ['Learn', 'Build', 'Review', 'Improve', 'Grow']

const industryFocus = [
    'Developer mentorship',
    'Practical implementation',
    'Real projects',
    'Code reviews',
    'Career preparation',
]

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                eyebrow="About GODIX"
                title="Developer-led learning for real-world growth."
                description="GODIX was created to bridge the gap between academic learning and industry expectations."
            />

            <section className="py-20">
                <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
                    <div>
                        <h2 className="text-3xl font-semibold text-slate-950">Our Story</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            GODIX was created to bridge the gap between academic learning and industry expectations.
                        </p>
                        <p className="mt-4 text-slate-600">
                            Many students learn programming through theory but struggle when applying their knowledge to real-world software development.
                        </p>
                        <p className="mt-4 text-slate-600">
                            GODIX was built to create a learning environment where students can develop technical skills through practical implementation, mentorship, projects, and continuous improvement.
                        </p>
                    </div>

                    <img src={sampleImage} alt="GODIX community learning" className="w-full rounded-3xl border border-slate-200 object-cover shadow-sm" />
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Why We Started GODIX</h2>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        We believe that learning should go beyond lectures and tutorials.
                    </p>
                    <p className="mt-4 max-w-3xl text-slate-600">
                        Students should experience how software is designed, developed, reviewed, tested, and improved.
                    </p>
                    <p className="mt-4 max-w-3xl text-slate-600">
                        Our goal is to create a developer-focused learning ecosystem.
                    </p>
                </Container>
            </section>

            <section className="py-20">
                <Container className="grid gap-8 lg:grid-cols-2">
                    <Card>
                        <h2 className="text-3xl font-semibold text-slate-950">Our Mission</h2>
                        <p className="mt-5 text-slate-600">
                            To help students develop practical technical skills through industry-led learning and project-based development.
                        </p>
                    </Card>

                    <Card>
                        <h2 className="text-3xl font-semibold text-slate-950">Our Vision</h2>
                        <p className="mt-5 text-slate-600">
                            To build a strong developer community that encourages learning, collaboration, mentorship, and continuous growth.
                        </p>
                    </Card>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Our Learning Philosophy</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-5">
                        {learningPhilosophy.map((step) => (
                            <Card key={step} className="text-center">
                                <h3 className="text-lg font-semibold text-slate-950">{step}</h3>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Industry-Led Learning Model</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {industryFocus.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Core Values</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {coreValues.map((value) => (
                            <Card key={value}>
                                <p className="text-slate-700">{value}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Future Goals</h2>
                    <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                        Create a sustainable learning community that helps students become confident software developers through practical experience and mentorship.
                    </p>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <Card className="text-center">
                        <h2 className="text-3xl font-semibold text-slate-950">Continue Your Development Journey</h2>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Button to="/programs" variant="primary">Explore Programs</Button>
                            <Button to="/contact" variant="outline">Contact Us</Button>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    )
}
