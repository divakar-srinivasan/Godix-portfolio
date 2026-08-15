import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import sampleImage from '../assets/sample.jpg'

const technicalInterviewTopics = [
    'Java interview preparation',
    'Backend interview preparation',
    'Spring Boot interview preparation',
    'API discussions',
    'Database concepts',
    'Problem-solving discussions',
]

const codingAssessmentTopics = [
    'Coding challenges',
    'Online assessments',
    'Programming exercises',
    'Debugging challenges',
    'Algorithmic thinking',
]

const aptitudeTopics = [
    'Quantitative aptitude',
    'Logical reasoning',
    'Analytical thinking',
    'Problem-solving',
]

const gdTopics = [
    'Structured discussions',
    'Presenting ideas',
    'Team discussions',
    'Technical discussions',
]

const communicationTopics = [
    'Professional communication',
    'Technical communication',
    'Presentation skills',
    'Collaboration',
]

const resumeTopics = [
    'Resume structure',
    'Project presentation',
    'Technical profile development',
    'Professional documentation',
]

const linkedinTopics = [
    'Profile optimization',
    'Professional branding',
    'Portfolio presentation',
    'Networking',
]

const mockInterviewTopics = [
    'Technical interviews',
    'HR discussions',
    'Interview simulations',
    'Feedback sessions',
]

const readinessFramework = ['Learn', 'Build', 'Review', 'Prepare', 'Interview', 'Grow']

export default function RoadmapPage() {
    return (
        <div>
            <PageHeader
                eyebrow="Career Development"
                title="Build the complete professional skills needed for industry success."
                description="Career development goes beyond technical knowledge. Prepare for interviews, communication, and real-world professional success."
            />

            <section className="py-20">
                <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
                    <div>
                        <h2 className="text-3xl font-semibold text-slate-950">Why Career Development Matters</h2>
                        <p className="mt-5 text-slate-600">
                            Technical knowledge alone is not enough.
                        </p>
                        <p className="mt-4 text-slate-600">
                            Software developers also need communication skills, problem-solving abilities, project experience, collaboration skills, and interview preparation.
                        </p>
                        <p className="mt-4 text-slate-600">
                            Career development should focus on building complete professionals who can succeed in interviews, work effectively in teams, and grow throughout their careers.
                        </p>
                    </div>

                    <img src={sampleImage} alt="Career development path" className="w-full rounded-3xl border border-slate-200 object-cover shadow-sm" />
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Technical Interview Preparation</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {technicalInterviewTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Coding Assessments</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {codingAssessmentTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Aptitude Preparation</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {aptitudeTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Group Discussions (GD)</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {gdTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Communication Skills</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {communicationTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Resume Building</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {resumeTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">LinkedIn Profile Development</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {linkedinTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Mock Interviews</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {mockInterviewTopics.map((item) => (
                            <Card key={item}>
                                <p className="text-slate-700">{item}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/70">
                <Container>
                    <h2 className="text-3xl font-semibold text-slate-950">Career Readiness Framework</h2>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {readinessFramework.map((step, index) => (
                            <div key={step} className="flex items-center gap-3">
                                <Card className="min-w-[140px] text-center">
                                    <p className="text-lg font-semibold text-slate-950">{step}</p>
                                </Card>
                                {index < readinessFramework.length - 1 && <span className="text-2xl text-slate-400">↓</span>}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <Card className="text-center">
                        <h2 className="text-3xl font-semibold text-slate-950">Prepare for Your Professional Journey</h2>
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
