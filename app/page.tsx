import { Fragment } from "react";
import { CopyEmail } from "@/components/CopyEmail";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Parallax } from "@/components/Parallax";
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
      <span data-rule className="h-px flex-1 origin-left bg-line" aria-hidden="true" />
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
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-4 animate-rise">
              <span className="label">{site.location}</span>
              <span className="label">{site.coordinates}</span>
              <span className="label ml-auto">
                {site.role} · {site.company}
              </span>
            </div>

            <h1 className="mt-10 text-[clamp(2.75rem,9.5vw,7.5rem)] font-medium leading-[0.94] tracking-tightest md:mt-16">
              {site.name.split(" ").map((word, index, words) => (
                <Fragment key={word}>
                  <span className="word-mask">
                    <span
                      className="inline-block animate-word-up"
                      style={{ animationDelay: `${120 + index * 90}ms` }}
                    >
                      {word}
                    </span>
                  </span>
                  {index < words.length - 1 && " "}
                </Fragment>
              ))}
            </h1>

            <Parallax speed={0.12}>
              <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
                <p className="text-[clamp(1.6rem,3.4vw,2.4rem)] font-medium leading-[1.12] tracking-[-0.03em] md:col-span-7">
                  <span className="block animate-rise" style={{ animationDelay: "320ms" }}>
                    Architecting immutable systems.
                  </span>
                  <span
                    className="block animate-rise font-serif font-normal italic text-ink-soft"
                    style={{ animationDelay: "420ms" }}
                  >
                    Probably nothing.
                  </span>
                </p>
                <p
                  className="max-w-prose animate-rise text-base leading-relaxed text-ink-soft md:col-span-4 md:col-start-9 md:pt-2"
                  style={{ animationDelay: "520ms" }}
                >
                  I build software that does not change under you, and the plumbing
                  that keeps it standing. Currently at {site.company}, working from{" "}
                  {site.location}.
                </p>
              </div>

              <div
                className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 animate-rise md:mt-16"
                style={{ animationDelay: "620ms" }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium"
                >
                  <span className="relative">
                    Get in touch
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-ink opacity-30" />
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
                  </span>
                  <span className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#about"
                  className="link-wipe text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  More about me
                </a>
              </div>
            </Parallax>
          </div>
        </section>

        {/* ───────────────────────── About ───────────────────────── */}
        <section id="about" className="border-t border-line py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <SectionLabel index="01" title="About" />
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

        {/* ─────────────────────── How I work ────────────────────── */}
        <section id="how-i-work" className="border-t border-line py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <SectionLabel index="02" title="How I work" />
            </Reveal>

            <ul className="mt-12 md:mt-16">
              {principles.map((principle, index) => (
                <Reveal
                  as="li"
                  key={principle.title}
                  delay={index * 80}
                  className="group grid gap-2 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <span className="label transition-colors duration-300 group-hover:text-accent md:col-span-1">
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

        {/* ────────────────────────── Now ────────────────────────── */}
        <section id="now" className="border-t border-line py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <SectionLabel index="03" title="Now" />
            </Reveal>

            <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
              <Reveal delay={80} className="md:col-span-4">
                <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-[1.15] tracking-[-0.03em]">
                  What I am working on at the moment.
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
                        className="mt-2.5 inline-block size-1.5 shrink-0 animate-pulse-dot rounded-full bg-accent"
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
                  Happy to talk about systems design, C, and the infrastructure
                  underneath. This site is a work in progress, so there is more to
                  come.
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
