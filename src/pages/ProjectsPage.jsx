import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import sampleImage from '../assets/sample.jpg'

const lifecycle = ['Idea', 'Planning', 'Design', 'Development', 'Testing', 'Deployment', 'Iteration']

const projectTypes = [
    'Console applications',
    'REST APIs',
    'Web applications',
    'Full-stack applications',
    'Microservices',
    'Containerized applications',
]

const workflow = ['Requirements', 'Development', 'Testing', 'Debugging', 'Deployment']

const gitTopics = ['Git', 'GitHub', 'Version control', 'Branching', 'Collaboration']

const reviewProcess = ['Write code', 'Review code', 'Receive feedback', 'Refactor', 'Improve']

const showcaseProjects = [
    {
        title: 'Project Card 1',
        description: 'A sample project card used to demonstrate how real project work is structured and presented.',
    },
    {
        title: 'Project Card 2',
        description: 'Another sample project card placeholder for future project showcases and assignment submissions.',
    },
    {
        title: 'Project Card 3',
        description: 'A future project example placeholder for showcasing code quality, iteration, and deployment practice.',
    },
]

const skills = ['Problem-solving', 'Debugging', 'Software design', 'Collaboration', 'Engineering practices']

export default function ProjectsPage() {
    return (
        <div>
            <PageHeader
                eyebrow="Projects"
                title="People learn software development by building software."
                description="At GODIX, projects are the core of learning. Students move from concepts to implementation, review, iteration, and deployment through real development work."
            />

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Why Projects Matter</h2>
                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        <Card>
                            <p className="text-slate-600">
                                Learning becomes more effective when concepts are applied through implementation.
                            </p>
                        </Card>
                        <Card>
                            <p className="text-slate-600">
                                Projects help students connect theory with practical software development, giving them a clearer understanding of how real systems are built and improved.
                            </p>
                        </Card>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Project Development Lifecycle</h2>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {lifecycle.map((step, index) => (
                            <div key={step} className="flex items-center gap-3">
                                <Card className="min-w-[140px] text-center">
                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">{index + 1}</p>
                                    <p className="mt-2 text-lg font-semibold text-slate-950">{step}</p>
                                </Card>
                                {index < lifecycle.length - 1 && <span className="text-2xl text-slate-400">↓</span>}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Types of Projects</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {projectTypes.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Development Workflow</h2>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {workflow.map((step, index) => (
                            <div key={step} className="flex items-center gap-3">
                                <Card className="min-w-[150px] text-center">
                                    <p className="text-lg font-semibold text-slate-950">{step}</p>
                                </Card>
                                {index < workflow.length - 1 && <span className="text-2xl text-slate-400">↓</span>}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Git and Collaboration</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {gitTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Code Review Process</h2>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {reviewProcess.map((step, index) => (
                            <div key={step} className="flex items-center gap-3">
                                <Card className="min-w-[160px] text-center">
                                    <p className="text-lg font-semibold text-slate-950">{step}</p>
                                </Card>
                                {index < reviewProcess.length - 1 && <span className="text-2xl text-slate-400">↓</span>}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Project Showcase</h2>
                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {showcaseProjects.map((project) => (
                            <Card key={project.title} className="overflow-hidden p-0">
                                <img src={sampleImage} alt={project.title} className="h-48 w-full object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                                    <p className="mt-3 text-slate-600">{project.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Skills Developed Through Projects</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
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
                    <Card className="text-center">
                        <h2 className="text-3xl font-semibold text-slate-950">Start Building Real Projects</h2>
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
