import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const learningReasons = [
    'Practical implementation',
    'Problem-solving',
    'Critical thinking',
    'Collaboration',
    'Continuous improvement',
]

const lifecycle = [
    {
        title: 'Requirement Analysis',
        description: 'Understand the goal, users, constraints, and expected behavior before writing code.',
    },
    {
        title: 'Planning',
        description: 'Break the work into manageable tasks, choose an approach, and prepare the development flow.',
    },
    {
        title: 'Development',
        description: 'Build features through practical implementation, clear structure, and steady iteration.',
    },
    {
        title: 'Testing',
        description: 'Check behavior, identify issues, validate changes, and improve software quality.',
    },
    {
        title: 'Deployment',
        description: 'Understand how software moves from local development to a working environment.',
    },
    {
        title: 'Improvement',
        description: 'Review feedback, refactor code, and strengthen the project through continuous learning.',
    },
]

const developmentWorkflow = [
    {
        title: 'Understanding requirements',
        description: 'Developers begin by clarifying what needs to be built and why it matters.',
    },
    {
        title: 'Writing code',
        description: 'Implementation focuses on clean structure, readable logic, and working software.',
    },
    {
        title: 'Refactoring',
        description: 'Code is improved after it works so it becomes easier to maintain and extend.',
    },
    {
        title: 'Documentation',
        description: 'Important decisions, setup steps, and usage details are captured for future reference.',
    },
    {
        title: 'Code maintenance',
        description: 'Developers revisit and improve existing code as requirements and understanding evolve.',
    },
]

const gitWorkflow = [
    'Repository management',
    'Branching',
    'Commits',
    'Pull requests',
    'Version control',
    'Collaboration',
]

const codeReviewTopics = [
    'Peer review',
    'Feedback',
    'Code quality',
    'Refactoring',
    'Continuous improvement',
]

const testingTopics = [
    'Manual testing',
    'Debugging',
    'Error analysis',
    'Code validation',
    'Software quality',
]

const collaborationTopics = [
    'Team discussions',
    'Knowledge sharing',
    'Communication',
    'Development collaboration',
    'Professional engineering practices',
]

const projectCategories = [
    'Console Applications',
    'Backend Applications',
    'REST APIs',
    'Full-Stack Applications',
    'Microservices',
    'Cloud Applications',
]

const developmentMindset = ['Learn', 'Build', 'Review', 'Improve', 'Repeat']

export default function ProjectsPage() {
    return (
        <div>
            <PageHeader
                eyebrow="Projects"
                title="Project-Based Learning"
                description="Learn software development by building real applications, following professional workflows, and continuously improving through practice and feedback."
            />

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Why Project-Based Learning?</h2>
                    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                        <div className="space-y-4 text-slate-600">
                            <p>
                                Students learn more effectively when they build software instead of only studying theory.
                            </p>
                            <p>
                                Project-based learning helps learners turn concepts into working applications, practice real development decisions, and improve through feedback.
                            </p>
                        </div>

                        <Card>
                            <ul className="space-y-3 text-slate-700">
                                {learningReasons.map((reason) => (
                                    <li key={reason}>{reason}</li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Container>
            </section>

            <section className="bg-white/70 py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Project Development Lifecycle</h2>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {lifecycle.map((step, index) => (
                            <div key={step.title} className="flex items-center gap-3">
                                <Card className="max-w-[220px] text-center">
                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">{index + 1}</p>
                                    <h3 className="mt-2 text-lg font-semibold text-slate-950">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                                </Card>
                                {index < lifecycle.length - 1 ? <span className="text-2xl text-slate-400" aria-hidden="true">↓</span> : null}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Development Workflow</h2>
                    <p className="mt-5 max-w-3xl text-slate-600">
                        Developers approach software development by understanding the problem, building carefully, improving the code, and maintaining clarity as the project grows.
                    </p>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {developmentWorkflow.map((topic) => (
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
                    <h2 className="text-3xl font-semibold text-slate-950">Git and GitHub Workflow</h2>
                    <p className="mt-5 max-w-3xl text-slate-600">
                        Git and GitHub help learners practice version control, collaborate with others, and understand how professional teams manage code changes.
                    </p>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {gitWorkflow.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Code Review Process</h2>
                    <p className="mt-5 max-w-3xl text-slate-600">
                        Code reviews help learners understand quality, receive practical feedback, and improve the structure, readability, and maintainability of their work.
                    </p>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {codeReviewTopics.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-white/70 py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Testing and Debugging</h2>
                    <p className="mt-5 max-w-3xl text-slate-600">
                        Testing and debugging teach learners to verify behavior, analyze errors, and build stronger software through careful validation.
                    </p>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {testingTopics.map((topic) => (
                            <Card key={topic}>
                                <p className="text-slate-700">{topic}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Collaboration and Team Development</h2>
                    <p className="mt-5 max-w-3xl text-slate-600">
                        Software development is collaborative. Learners practice communication, shared problem-solving, and engineering habits that support team-based development.
                    </p>
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
                    <h2 className="text-3xl font-semibold text-slate-950">Project Categories</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {projectCategories.map((category) => (
                            <Card key={category}>
                                <p className="text-slate-700">{category}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Development Mindset</h2>
                    <p className="mt-5 max-w-3xl text-slate-600">
                        Continuous improvement matters because developers rarely grow from one attempt alone. They learn by building, reviewing, refining, and repeating the process with better judgment each time.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {developmentMindset.map((step, index) => (
                            <div key={step} className="flex items-center gap-3">
                                <Card className="min-w-[140px] text-center">
                                    <p className="text-lg font-semibold text-slate-950">{step}</p>
                                </Card>
                                {index < developmentMindset.length - 1 ? <span className="text-2xl text-slate-400" aria-hidden="true">↓</span> : null}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <Card className="text-center">
                        <h2 className="text-3xl font-semibold text-slate-950">Start Building. Keep Learning.</h2>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Button as={Link} to="/career-development" variant="primary">Career Development</Button>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    )
}
