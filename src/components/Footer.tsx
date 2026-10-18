import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-lake text-sand-light">
      <Container>
        <div className="grid gap-8 py-10 sm:grid-cols-3">
          <div>
            <p className="font-heading text-base font-medium text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-sand-light/80">
              {siteConfig.location.subLocation}, {siteConfig.location.county}
            </p>
            <p className="text-sm text-sand-light/80">
              {siteConfig.location.landmark}
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-medium uppercase tracking-wide text-amber-light">
              Get in touch
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-sm text-sand-light/80 hover:text-white"
            >
              {siteConfig.email}
            </a>
            <p className="text-sm text-sand-light/80">
              {siteConfig.location.postal}
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-medium uppercase tracking-wide text-amber-light">
              Explore
            </p>
            <ul className="mt-2 space-y-1">
              {siteConfig.nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-sand-light/80 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-xs text-sand-light/60">
          © {year} {siteConfig.name}. Registered self help group, Kisumu
          County.
        </div>
      </Container>
    </footer>
  );
}
