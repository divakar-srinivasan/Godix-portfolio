import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import sampleImage from '../assets/sample.png'

const coreValues = [
    'Continuous learning',
    'Collaboration',
    'Practical development',
    'Technical growth',
    'Career preparation',
]

const learningPhilosophy = ['Learn', 'Build', 'Review', 'Improve', 'Grow']

const industryFocus = [
    'Developer mentorship',
    'Practical development',
    'Project-based learning',
    'Code review',
    'Career preparation',
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                eyebrow="About GODIX"
                title="Developer-led learning for real-world growth."
                description="GODIX is an industry-led developer community built around mentorship, practical development, and continuous learning."
            />

            <section className="py-24">
                <Container className="grid gap-16 lg:grid-cols-[1fr_0.85fr]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                            Our Story
                        </h2>

                        <p className="mt-6 text-lg leading-9 text-slate-600">
                            GODIX helps learners move from theory to practical development through
                            guided learning, project-based practice, and developer mentorship.
                        </p>

                        <p className="mt-5 leading-8 text-slate-600">
                            Many students learn programming concepts but need structured practice
                            to apply those concepts in software development.
                        </p>

                        <p className="mt-5 leading-8 text-slate-600">
                            GODIX creates a learning environment where students develop technical
                            growth through practical implementation, code review, collaboration,
                            and continuous improvement.
                        </p>
                    </motion.div>

                    <motion.img
                        src={sampleImage}
                        alt="GODIX community learning"
                        width="1920"
                        height="1080"
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-[32px] border border-slate-200 object-cover shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    />
                </Container>
            </section>

            <section className="bg-white/70 py-24">
                <Container>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                        Why We Started GODIX
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
                        We believe learning should go beyond lectures and tutorials.
                    </p>

                    <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                        Students should experience how software is planned, developed, reviewed,
                        tested, and improved.
                    </p>

                    <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                        Our goal is to support a developer-focused community where learners build
                        habits that continue beyond a single program.
                    </p>
                </Container>
            </section>

            <section className="py-24">
                <Container className="grid gap-8 lg:grid-cols-2">
                    <Card>
                        <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                            Our Mission
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            To help students develop practical technical skills through developer
                            mentorship, project-based learning, and code review.
                        </p>
                    </Card>

                    <Card>
                        <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                            Our Vision
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            To build a developer community that encourages collaboration,
                            technical growth, career preparation, and continuous learning.
                        </p>
                    </Card>
                </Container>
            </section>

            <section className="bg-white/70 py-24">
                <Container>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                        Our Learning Philosophy
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-5">
                        {learningPhilosophy.map((step) => (
                            <Card key={step} className="text-center">
                                <h3 className="text-xl font-semibold text-slate-950">{step}</h3>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-24">
                <Container>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                        Industry-Led Learning Model
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {industryFocus.map((item) => (
                            <Card key={item}>
                                <p className="leading-7 text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-white/70 py-24">
                <Container>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                        Core Values
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {coreValues.map((value) => (
                            <Card key={value}>
                                <p className="leading-7 text-slate-700">{value}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-24">
                <Container>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                        Future Goals
                    </h2>

                    <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-600">
                        Keep building a practical learning community where students grow through
                        developer mentorship, project-based learning, and continuous improvement.
                    </p>
                </Container>
            </section>

            <section className="py-24">
                <Container>
                    <Card className="py-12 text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                            Continue Your Development Journey
                        </h2>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <Button as={Link} to="/programs" variant="primary">
                                Explore Programs
                            </Button>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    )
}