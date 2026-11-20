import { CopyEmail } from "@/components/CopyEmail";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialLinkRow } from "@/components/SocialLink";
import { about, currently, principles, site, socialLinks } from "@/lib/site";

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="label text-accent">{index}</span>
      <span className="label">{title}</span>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section id="top" className="pb-24 pt-32 md:pb-32 md:pt-44">
          <div className="container-page">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-4">
              <span className="label">{site.location}</span>
              <span className="label">{site.coordinates}</span>
              <span className="label ml-auto">
                {site.role} · {site.company}
              </span>
            </div>

            <h1 className="mt-10 text-[clamp(2.75rem,9.5vw,7.5rem)] font-medium leading-[0.94] tracking-tightest md:mt-16">
              {site.name}
            </h1>

            <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
              <p className="text-[clamp(1.6rem,3.4vw,2.4rem)] font-medium leading-[1.12] tracking-[-0.03em] md:col-span-7">
                Architecting immutable systems.
                <span className="font-serif font-normal italic text-ink-soft">
                  {" "}
                  Probably nothing.
                </span>
              </p>
              <p className="max-w-prose text-base leading-relaxed text-ink-soft md:col-span-4 md:col-start-9 md:pt-2">
                I build software that doesn&apos;t change under you — and the
                plumbing that keeps it standing. Currently at {site.company},
                working from {site.location}.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-16">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium"
              >
                <span className="border-b border-ink pb-0.5 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                  Get in touch
                </span>
                <span className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#profile"
                className="link-wipe text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                More about me
              </a>
            </div>
          </div>
        </section>

        {/* ──────────────────────── Profile ───────────────────────── */}
        <section id="profile" className="border-t border-line py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <SectionLabel index="01" title="Profile" />
            </Reveal>

            <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
              <Reveal delay={80} className="md:col-span-5">
                <h2 className="text-[clamp(1.75rem,3.2vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.03em]">
                  {about.heading}
                </h2>
              </Reveal>

              <Reveal delay={160} className="md:col-span-6 md:col-start-7">
                <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────────────────── Principles ─────────────────────── */}
        <section id="principles" className="border-t border-line py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <SectionLabel index="02" title="Principles" />
            </Reveal>

            <ul className="mt-12 md:mt-16">
              {principles.map((principle, index) => (
                <Reveal
                  as="li"
                  key={principle.title}
                  delay={index * 80}
                  className="grid gap-2 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <span className="label md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-medium tracking-[-0.02em] md:col-span-4 md:text-2xl">
                    {principle.title}
                  </h3>
                  <p className="max-w-prose leading-relaxed text-ink-soft md:col-span-6 md:col-start-7">
                    {principle.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────────────────── Currently ───────────────────────── */}
        <section id="currently" className="border-t border-line py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <SectionLabel index="03" title="Currently" />
            </Reveal>

            <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
              <Reveal delay={80} className="md:col-span-4">
                <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-[1.15] tracking-[-0.03em]">
                  What I&apos;m working on this month.
                </h2>
              </Reveal>

              <Reveal delay={160} className="md:col-span-7 md:col-start-6">
                <ul className="space-y-5">
                  {currently.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-4 text-lg leading-relaxed text-ink-soft"
                    >
                      <span
                        className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────── Contact ────────────────────────── */}
        <section id="contact" className="border-t border-line py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <SectionLabel index="04" title="Contact" />
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-12 max-w-3xl text-[clamp(1.9rem,4.2vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.035em] md:mt-16">
                Let&apos;s build something that stays put.
              </h2>
            </Reveal>

            <div className="mt-12 md:mt-16">
              {site.email && (
                <Reveal delay={120} className="border-b border-line pb-6">
                  <CopyEmail email={site.email} />
                </Reveal>
              )}

              <div className="border-t border-line">
                {socialLinks.map((link, index) => (
                  <Reveal key={link.href} delay={160 + index * 60}>
                    <SocialLinkRow link={link} />
                  </Reveal>
                ))}
              </div>

              <Reveal delay={240}>
                <p className="mt-8 max-w-prose text-sm leading-relaxed text-ink-faint">
                  Open to conversations about systems design, C, and the
                  infrastructure underneath. This site is a work in progress —
                  more to come.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <EngagementTracker />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
