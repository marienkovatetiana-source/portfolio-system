import avatar from "@/assets/avatar.jpg";
import okvada from "@/assets/okvada-cover.jpg";
import plantin from "@/assets/plantin-cover.jpg";
import portrait from "@/assets/portrait.webp";
import viseori from "@/assets/viseori-cover.jpg";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { PortraitCard } from "@/components/PortraitCard";
import { WorkCard } from "@/components/WorkCard";

// TODO: replace "#" with the real LinkedIn and resume (PDF) URLs.
const linkedinHref = "#";
const resumeHref = "#";

export default function Home() {
  return (
    <>
      <Header
        brandName="Tetiana Marienkova"
        avatar={avatar}
        actions={
          <>
            <Button href={linkedinHref} variant="secondary">
              LinkedIn
            </Button>
            <Button href={resumeHref}>Resume (PDF)</Button>
          </>
        }
      />

      <main id="top" className="mx-auto max-w-page px-4 md:px-8">
        <section className="flex flex-col items-start gap-8 py-8 md:flex-row md:items-center md:py-section">
          <div className="flex flex-col items-start gap-6 md:w-2/3">
            <p className="font-display text-label text-ink-muted">
              UI/UX Designer &amp; Front-end Developer
            </p>
            <h1 className="font-display text-heading text-ink md:text-display">
              I design and build websites for companies and entrepreneurs
            </h1>
            <p className="font-display text-body text-ink-muted md:text-lead">
              so their services are easy to understand, find and choose online.
            </p>
            <Button href="#work" size="lg">
              View work
            </Button>
          </div>
          <div className="w-full p-3 md:w-1/3">
            <PortraitCard
              image={portrait}
              alt="Tetiana Marienkova, UI/UX designer and front-end developer"
              name="Tetiana Marienkova"
              role="UI/UX Designer & Front-end Developer"
            />
          </div>
        </section>

        <section id="work" className="flex flex-col gap-6 pb-section">
          <h2 className="font-display text-heading text-ink">Selected work</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <WorkCard
              title="OKVADA"
              description="Corporate website for a transport company"
              cover={okvada}
              href="#work"
            />
            <WorkCard
              title="VISEORI"
              description="Project for a digital agency"
              cover={viseori}
              href="#work"
            />
            <WorkCard
              title="Plantin Beauty Studio"
              description="Multi-page website for a nail studio"
              cover={plantin}
              href="#work"
            />
          </div>
          <div>
            <Button href="#work" variant="secondary">
              All work
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
