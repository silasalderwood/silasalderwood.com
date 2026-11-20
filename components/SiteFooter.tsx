import { LocalTime } from "@/components/LocalTime";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {year} {site.name}
        </p>
        <p className="label">
          {site.location} <span className="mx-2 text-line-strong">/</span>{" "}
          <LocalTime withCity={false} />
        </p>
        <p className="label">
          Built with Next.js &amp; Tailwind{" "}
          <span className="mx-2 text-line-strong">/</span>
          <a href="#top" className="link-wipe hover:text-ink">
            Top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
