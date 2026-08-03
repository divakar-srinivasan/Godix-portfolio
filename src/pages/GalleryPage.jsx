import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { galleryItems } from '../data/placeholderData'
import sampleImage from '../assets/sample-image.jpg'

export default function GalleryPage() {
  return (
    <div>
      <PageHeader eyebrow="Gallery" title="A visual story of learning, collaboration, and progress" description="The gallery is prepared to grow with real photos and case studies later." />
      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          {galleryItems.map((item) => (
            <Card key={item.title}>
              <img src={sampleImage} alt={item.title} className="h-48 w-full rounded-2xl object-cover" />
              <h2 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </Container>
      </section>
    </div>
  )
}
