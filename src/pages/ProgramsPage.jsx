import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import sampleImage from '../assets/sample.png'

const learningStages = [
    {
        title: 'Learn',
        description: 'Start with structured technical fundamentals and build a clear foundation.',
    },
    {
        title: 'Build',
        description: 'Apply concepts by creating software, practicing implementation, and solving real problems.',
    },
    {
        title: 'Review',
        description: 'Use code review and feedback to improve quality, structure, and decision-making.',
    },
    {
        title: 'Improve',
        description: 'Refine your approach through iteration, debugging, and stronger engineering habits.',
    },
    {
        title: 'Grow',
        description: 'Develop the habits, confidence, and technical depth needed for real-world software work.',
    },
]

const developmentPaths = [
    {
        title: 'Java Development',
        overview: 'Build the core foundation for object-oriented development and structured problem solving.',
        topics: ['Java fundamentals', 'OOP', 'Collections', 'Exception handling', 'Multithreading', 'JDBC', 'Maven'],
        focus: 'Practical focus: writing clean, maintainable Java code with strong fundamentals.',
        outcome: 'Stronger logic, better coding discipline, and backend readiness.',
    },
    {
        title: 'Backend Development',
        overview: 'Learn how applications manage data, APIs, service logic, and system interactions.',
        topics: ['Spring Framework', 'Spring Boot', 'REST APIs', 'Database integration', 'Authentication', 'Microservices'],
        focus: 'Practical focus: building reliable and scalable server-side systems.',
        outcome: 'Stronger backend engineering capability and service-oriented thinking.',
    },
    {
        title: 'Full-Stack Development',
        overview: 'Understand how frontend and backend work together in complete product development.',
        topics: ['HTML', 'CSS', 'JavaScript', 'React', 'API integration', 'Frontend architecture'],
        focus: 'Practical focus: connecting interfaces, logic, and application flow end-to-end.',
        outcome: 'Better product understanding and full-stack execution confidence.',
    },
    {
        title: 'DevOps and Cloud',
        overview: 'Build familiarity with delivery workflows, automation, deployment, and cloud-based systems.',
        topics: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud fundamentals'],
        focus: 'Practical focus: understanding how software moves from development to deployment.',
        outcome: 'Stronger delivery awareness and engineering workflow competence.',
    },
    {
        title: 'Data Structures and Algorithms',
        overview: 'Develop analytical discipline, code efficiency, and structured problem-solving skills.',
        topics: ['Arrays', 'Strings', 'Trees', 'Graphs', 'Dynamic programming', 'Problem solving'],
        focus: 'Practical focus: solving coding challenges with cleaner reasoning and better complexity awareness.',
        outcome: 'Stronger technical decision-making and problem-solving ability.',
    },
]

const roadmap = [
    'Programming Fundamentals',
    'Core Development',
    'Projects',
    'Code Reviews',
    'Advanced Development',
    'Career Preparation',
]

const workflow = ['Requirement Analysis', 'Development', 'Testing', 'Code Review', 'Deployment', 'Iteration']

const projectLearningPreview = [
    'Guided implementation tasks',
    'Repository-based practice',
    'Code review checkpoints',
    'Documentation habits',
    'Workflow practice',
    'Project discussions',
]

const technologies = {
    programming: ['Java'],
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['Spring', 'Spring Boot', 'REST APIs'],
    devops: ['Git', 'Docker', 'Kubernetes'],
    databases: ['MySQL'],
}

const skills = [
    'Problem-solving',
    'Coding',
    'Debugging',
    'Project development',
    'Collaboration',
    'Version control',
    'Software architecture',
    'Engineering practices',
]

const faqs = [
    {
        question: 'Who can join?',
        answer: 'GODIX is designed for students and early-career learners who want a more practical, developer-focused path to growth.',
    },
    {
        question: 'Do I need previous experience?',
        answer: 'A foundation helps, but the learning experience is designed to support learners as they build capability through guided development.',
    },
    {
        question: 'Are projects included?',
        answer: 'Yes. Project work is a core part of the learning journey and helps learners apply what they are learning in realistic software scenarios.',
    },
    {
        question: 'How does mentorship work?',
        answer: 'Mentorship is built around technical guidance, feedback, and practical direction that helps learners move from learning to implementation.',
    },
    {
        question: 'Which technologies are covered?',
        answer: 'The learning paths cover Java, frontend, backend, cloud, DevOps, and data structures and algorithms as part of a practical engineering journey.',
    },
    {
        question: 'How does code review work?',
        answer: 'Code review is used to help learners improve code quality, reasoning, structure, and engineering judgment through feedback and iteration.',
    },
]

export default function ProgramsPage() {
    return (
        <div>
            <PageHeader
                eyebrow="Programs"
                title="Choose Your Development Path"
                description="Explore practical learning paths designed around developer mentorship, project-based learning, code review, and continuous learning."
            />

            <section className="py-20">
                <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
                    <div>
                        <h2 className="text-3xl font-semibold text-slate-950">How Learning Works</h2>
                        <p className="mt-5 text-slate-600">
                            The GODIX learning model is built around practical development, developer mentorship, code review, and steady technical growth.
                        </p>
                    </div>

                    <img
                        src={sampleImage}
                        alt="GODIX learning journey"
                        width="1920"
                        height="1080"
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-3xl border border-slate-200 object-cover shadow-sm"
                    />
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {learningStages.map((stage) => (
                            <Card key={stage.title}>
                                <h3 className="text-xl font-semibold text-slate-950">{stage.title}</h3>
                                <p className="mt-3 text-slate-600">{stage.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Development Paths</h2>
                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        {developmentPaths.map((path) => (
                            <Card key={path.title}>
                                <h3 className="text-xl font-semibold text-slate-950">{path.title}</h3>
                                <p className="mt-3 text-slate-600">{path.overview}</p>
                                <div className="mt-5">
                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Key topics</p>
                                    <ul className="mt-3 space-y-2 text-slate-600">
                                        {path.topics.map((topic) => (
                                            <li key={topic}>• {topic}</li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="mt-5 text-slate-600"><strong className="text-slate-950">Practical focus:</strong> {path.focus}</p>
                                <p className="mt-3 text-slate-600"><strong className="text-slate-950">Learning outcome:</strong> {path.outcome}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Learning Roadmap</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {roadmap.map((step) => (
                            <Card key={step}>
                                <p className="text-lg font-semibold text-slate-950">{step}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Development Workflow</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {workflow.map((step) => (
                            <Card key={step}>
                                <p className="text-lg font-semibold text-slate-950">{step}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Project-Based Learning in Programs</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {projectLearningPreview.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Tools and Technologies</h2>
                    <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-5">
                        {Object.entries(technologies).map(([group, items]) => (
                            <Card key={group}>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">{group}</p>
                                <ul className="mt-4 space-y-2 text-slate-600">
                                    {items.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Skills You'll Develop</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {skills.map((skill) => (
                            <Card key={skill}>
                                <p className="text-slate-700">{skill}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">FAQ</h2>
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
                        <h2 className="text-3xl font-semibold text-slate-950">Start Building Real Software</h2>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Button as={Link} to="/projects" variant="primary">Explore Projects</Button>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    )
}
