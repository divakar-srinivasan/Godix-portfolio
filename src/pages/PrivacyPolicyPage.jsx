import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader eyebrow="Privacy Policy" title="Privacy and data handling" description="This is a placeholder policy page for future legal content." />
      <section className="py-20">
        <Container>
          <Card>
            <p className="text-slate-600">We will provide the complete privacy policy content here as the product evolves.</p>
          </Card>
        </Container>
      </section>
    </div>
  )
}
