import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const philosophyTopics = [
    'Technical growth',
    'Practical experience',
    'Communication',
    'Professional habits',
    'Continuous learning',
]

const technicalPreparation = [
    'Programming fundamentals',
    'Problem-solving',
    'Data structures and algorithms',
    'Backend development',
    'Full-stack development',
    'DevOps fundamentals',
]

const portfolioDevelopment = [
    {
        title: 'Real projects',
        description: 'Projects help learners apply technical concepts through practical development work.',
    },
    {
        title: 'GitHub repositories',
        description: 'Repositories show version control habits, code organization, and project progress.',
    },
    {
        title: 'Documentation',
        description: 'Clear documentation explains setup, decisions, usage, and development context.',
    },
    {
        title: 'Project presentations',
        description: 'Learners practice explaining what they built, how it works, and what they improved.',
    },
    {
        title: 'Code quality',
        description: 'Readable, maintainable code supports review, collaboration, and long-term improvement.',
    },
]

const technicalAssessments = [
    'Coding assessments',
    'Problem-solving exercises',
    'Practical implementation',
    'Debugging challenges',
    'Technical evaluation',
]

const aptitudePreparation = [
    'Logical reasoning',
    'Quantitative aptitude',
    'Analytical thinking',
    'Pattern recognition',
    'Time management',
]

const communicationSkills = [
    'Technical communication',
    'Team discussions',
    'Presentation skills',
    'Professional communication',
    'Knowledge sharing',
]

const collaborationTopics = [
    'Group discussions',
    'Collaboration',
    'Team participation',
    'Technical discussions',
    'Constructive feedback',
]

const interviewPreparation = [
    'Resume preparation',
    'GitHub profile improvement',
    'Technical interviews',
    'Mock interviews',
    'Project explanation',
]

const growthMindset = ['Learn', 'Practice', 'Build', 'Review', 'Improve', 'Grow']

export default function RoadmapPage() {
    return (
        <div>
            <PageHeader
                title="Career Development"
                description="Develop the technical, communication, and professional skills required for long-term growth in software engineering."
            />

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Career Development Philosophy</h2>
                    <p className="mt-5 max-w-3xl text-slate-600">
                        Career growth is a continuous process. GODIX helps learners build technical depth, practical experience, communication skills, professional habits, and a steady approach to continuous learning.
                    </p>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {philosophyTopics.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-white/70 py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Technical Preparation</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {technicalPreparation.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Project Portfolio Development</h2>
                    <p className="mt-5 max-w-3xl text-slate-600">
                        A project portfolio should reflect practical implementation, development discipline, and the ability to explain technical work clearly.
                    </p>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {portfolioDevelopment.map((topic) => (
                            <Card key={topic.title}>
                                <h3 className="text-lg font-semibold text-slate-950">{topic.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{topic.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-white/70 py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Technical Assessments</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {technicalAssessments.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Aptitude Preparation</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {aptitudePreparation.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-white/70 py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Communication and Professional Skills</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {communicationSkills.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Group Discussions and Collaboration</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {collaborationTopics.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-white/70 py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Interview Preparation</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {interviewPreparation.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Continuous Growth Mindset</h2>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {growthMindset.map((step, index) => (
                            <div key={step} className="flex items-center gap-3">
                                <Card className="min-w-[140px] text-center">
                                    <p className="text-lg font-semibold text-slate-950">{step}</p>
                                </Card>
                                {index < growthMindset.length - 1 ? <span className="text-2xl text-slate-400" aria-hidden="true">&darr;</span> : null}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <Card className="text-center">
                        <h2 className="text-3xl font-semibold text-slate-950">Continue Your Professional Growth</h2>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Button as={Link} to="/contact" variant="primary">Contact Us</Button>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    )
}
