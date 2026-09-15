import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

const articles = [
  {
    publisher: "Capital Current",
    title:
      "Inaugural Music in the Woods festival gives Orléans a live songfest of its own",
    href: "https://capitalcurrent.ca/inaugural-music-in-the-woods-festival-gives-orleans-a-live-songfest-of-its-own/",
    image: "https://capitalcurrent.ca/wp-content/uploads/2026/08/stage-shot.jpg",
    alt: "Crowd at the Music in the Woods festival in Orléans",
  },
  {
    publisher: "Capital Current",
    title:
      "‘Modern way of doing business’: How public feedback reshaped a proposed salmon farm along the Ottawa River",
    href: "https://capitalcurrent.ca/modern-way-of-doing-business-how-public-feedback-reshaped-a-proposed-salmon-farm-along-the-ottawa-river/",
    image: "https://capitalcurrent.ca/wp-content/uploads/2026/07/salmon-farm-litchfield-quebec.jpg",
    alt: "The Ottawa River near the site of a proposed salmon farm",
  },
  {
    publisher: "The Charlatan",
    title:
      "Status for All: protestors come together to uplift migrant regularization efforts",
    href: "https://charlatan.ca/status-for-all-protestors-come-together-to-uplift-migrant-regularization-efforts/",
    image: "https://charlatan.ca/wp-content/uploads/2024/09/cMigrantRights-010.jpg",
    alt: "Demonstrators gathered at a Status for All rally",
  },
  {
    publisher: "Roots Music Canada",
    title:
      "What 2 Canadian folk-roots venues are doing to survive and thrive as audiences age",
    href: "https://www.rootsmusic.ca/2026/01/14/what-2-canadian-folk-roots-venues-are-doing-to-survive-and-thrive-as-audiences-age/",
    image: "https://www.rootsmusic.ca/wp-content/uploads/2025/12/Caitlin-Connelly-Madison-Violet-Christie-J-Simmons-Promo-1536x1124.jpg",
    alt: "Performers on stage at a Canadian folk-roots venue",
  },
];

const digitalItems = [
  {
    image: '/content1.png',
    alt: "Graphic explaining Indigenous consent, consultation and accommodation",
     title: "Promotional Post for Academic Article",
     org: "REBUILDING FIRST NATIONS GOVERNANCE",
  },
  {
    image: '/content2.png',
    alt: "Graphic titled UNDRIP in Canada with a magnifying glass illustration",
     title: "Promotional Post for Academic Article",
     org: "REBUILDING FIRST NATIONS GOVERNANCE",
  },
  {
    image: '/content3.png',
    alt: "Graphic titled Rights Recognition Is Only the Beginning",
     title: "Promotional Post for Research Brief",
     org: "REBUILDING FIRST NATIONS GOVERNANCE",
  },
  {
    image: '/content4.png',
    alt: "Infographic titled Rebuilding Policy with six guiding questions",
     title: "Infographic on Rebuilding Policy",
     org: "REBUILDING FIRST NATIONS GOVERNANCE",
  },
];

export default function Home() {
  return (
    <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand">
          <div
            className="hero-vine-left pointer-events-none absolute inset-y-0 -left-80 h-full w-80 opacity-60 xl:left-0 xl:w-[max(0px,calc((100vw-72rem)/2))]"
            aria-hidden="true"
          >
            <Image
              src="/vine-right.svg"
              alt=""
              fill
              sizes="max(0px, calc((100vw - 72rem) / 2))"
              className="object-cover object-center -scale-x-100"
            />
          </div>
          <div
            className="hero-vine-right pointer-events-none absolute inset-y-0 -right-80 h-full w-80 opacity-60 xl:right-0 xl:w-[max(0px,calc((100vw-72rem)/2))]"
            aria-hidden="true"
          >
            <Image
              src="/vine-right.svg"
              alt=""
              fill
              sizes="max(0px, calc((100vw - 72rem) / 2))"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="mb-6 inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Journalism & Digital Content
            </p>
            <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
               Reporting on the stories that shape our world.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-white/70">
              I&apos;m Maryam Khan and I&apos;m a journalist and digital storyteller. I&apos;m
              always open to working on new projects and stories.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand transition-colors hover:bg-botanical focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Let&apos;s work together
            </a>
          </div>
        </section>

        {/* Bio */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_2fr]">
            <Image
              src={'/headshot.jpeg'}
              alt="Portrait of Maryam Khan"
              width={1024}
              height={1280}
              loading="eager"
              decoding="async"
              className="aspect-[4/5] w-full rounded-lg bg-mist object-cover"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple">
                About
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                 Community, Culture, Public Policy
              </h2>
              <p className="mt-5 leading-relaxed text-ink/60">
                I&apos;m a Bachelor of Journalism student at Carleton University,
                 where I&apos;ve built my reporting around community, culture and
                 public policy. My published work covers a range of topics from
                 social justice, the environment and live music for outlets
                 including The Charlatan, Capital Current and Roots Music Canada.
              </p>
              <p className="mt-4 leading-relaxed text-ink/60">
                 Alongside reporting, I work in communications and digital
                 content — writing and researching explainers, producing social
                 graphics and infographics, and simplifying dense material into
                 clear, accessible stories.
              </p>
              <a
                href={'/resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                View résumé
              </a>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section id="articles" className="bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple">
                Selected Articles
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                 Samples of my reporting
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {articles.map((article) => (
                <article
                  key={article.href}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-ink/5 bg-white transition-shadow hover:shadow-lg"
                >
                  <Image
                    src={article.image}
                    alt={article.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full bg-mist object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-purple">
                      {article.publisher}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-snug tracking-tight">
                      {article.title}
                    </h3>
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block text-sm font-semibold text-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-purple"
                    >
                      Read piece →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Content */}
        <section id="content" className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Digital Content
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-white md:text-4xl">
               Samples of my digital content
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {digitalItems.map((item, index) => (
                <figure
                  key={item.title + index}
                  className="group overflow-hidden rounded-xl border border-white/15 bg-white/10"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1080}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <figcaption className="p-6">
                    <h3 className="font-display text-xl tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/50">
                      {item.org}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple">
                Contact
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Let&apos;s make the next story worth telling.
              </h2>
              <p className="mt-6 leading-relaxed text-ink/60">
                Have a pitch, a project, or a question? My inbox is open and I
                read everything.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
  );
}
