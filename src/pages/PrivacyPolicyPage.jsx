import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

export default function PrivacyPolicyPage() {
    return (
        <div>
            <PageHeader eyebrow="Privacy Policy" title="How we protect your information" description="We are committed to protecting your privacy and being transparent about how we use your data." />
            <section className="py-20">
                <Container className="max-w-4xl space-y-8">
                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Information We Collect</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                When you contact us or explore our programs, we may collect:
                            </p>
                            <ul className="space-y-2 pl-4">
                                <li>• Your name and email address</li>
                                <li>• Your message or inquiry details</li>
                                <li>• Information about your programming background (optional)</li>
                                <li>• Your professional goals and interests (optional)</li>
                            </ul>
                            <p>
                                We collect this information only when you voluntarily provide it through our contact form, email, or LinkedIn messages.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">How We Use Your Information</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                We use the information you provide to:
                            </p>
                            <ul className="space-y-2 pl-4">
                                <li>• Respond to your inquiries within 24–48 hours</li>
                                <li>• Provide information about GODIX programs and career development resources</li>
                                <li>• Discuss your learning goals and career interests</li>
                                <li>• Send updates about relevant programs (only if you opt in)</li>
                            </ul>
                            <p>
                                We do not sell, trade, or share your information with third parties.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Communication Preferences</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                We respect your communication preferences. You can:
                            </p>
                            <ul className="space-y-2 pl-4">
                                <li>• Opt out of promotional emails at any time</li>
                                <li>• Update your preferences by emailing us</li>
                                <li>• Request to have your information removed from our records</li>
                            </ul>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Data Protection</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                Your data security is important to us. We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, or disclosure.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Third-Party Links</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                Our website may include links to external websites and social media platforms. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies before sharing information.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Updates to This Policy</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                We may update this privacy policy periodically. Changes will be effective when posted to our website.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-semibold text-slate-950">Contact Us</h2>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p>
                                If you have questions about this privacy policy or how we handle your information, please contact us at:
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
