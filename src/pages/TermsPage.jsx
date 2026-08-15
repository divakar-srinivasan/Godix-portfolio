import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

export default function TermsPage() {
    return (
        <div>
            <PageHeader eyebrow="Terms" title="Terms of use" description="Please read these terms carefully before using the GODIX website and services." />
            <section className="py-20">
                <Container className="max-w-4xl space-y-8">
                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Website Use</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                By accessing and using the GODIX website, you agree to comply with these terms and conditions. You acknowledge that you are responsible for your use of the website and agree to use it only for lawful purposes.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Educational Content Disclaimer</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                GODIX provides educational content and mentorship for developers. The information on our website is for educational purposes only and is not guaranteed to achieve specific employment outcomes, placements, or salary increases.
                            </p>
                            <p>
                                We focus on building practical skills, technical knowledge, and professional habits. Individual results depend on effort, dedication, and real-world application of learned concepts.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Intellectual Property</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                All content on the GODIX website, including text, graphics, logos, and code examples, is the intellectual property of GODIX or licensed to us. You may not reproduce, distribute, or modify this content without permission.
                            </p>
                            <p>
                                Code you write as part of GODIX programs remains your intellectual property. We retain the right to use your work as anonymized case studies or examples with your consent.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">User Responsibilities</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                When using GODIX, you agree to:
                            </p>
                            <ul className="space-y-2 pl-4">
                                <li>• Provide accurate and honest information</li>
                                <li>• Use the platform and resources responsibly</li>
                                <li>• Respect the intellectual property of others</li>
                                <li>• Comply with all applicable laws and regulations</li>
                                <li>• Not engage in harassment, plagiarism, or unethical behavior</li>
                            </ul>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Limitation of Liability</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                GODIX provides educational content and mentorship on an "as is" basis. We do not guarantee specific career outcomes, job placements, salary increases, or employment results. Your success depends on your effort, learning application, and real-world circumstances beyond our control.
                            </p>
                            <p>
                                GODIX is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our platform or services.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Third-Party Links</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                The GODIX website may contain links to external websites. We are not responsible for the content, accuracy, or practices of these third-party sites. Use them at your own risk and review their terms before engaging.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Changes to Terms</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                GODIX reserves the right to update these terms at any time. Continued use of the website constitutes acceptance of the updated terms.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Contact Us</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                If you have questions about these terms, please contact us at:
                            </p>
                            <p>
                                <a href="mailto:info@godix.in" className="font-medium text-sky-600 hover:text-sky-700">
                                    info@godix.in
                                </a>
                            </p>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    )
}
