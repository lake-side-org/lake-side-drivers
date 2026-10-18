import Link from "next/link";
import Container from "./Container";
import LogoMark from "./LogoMark";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="border-b border-lake/10 bg-sand-light">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark size={44} />
            <span className="font-heading text-base font-medium leading-tight text-lake sm:text-lg">
              {siteConfig.shortName}
            </span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="hidden items-center gap-6 sm:flex">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-heading text-sm font-medium text-lake hover:text-amber-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile nav: a plain, dependency-free details/summary disclosure
                so it works without JavaScript and stays accessible. */}
            <details className="sm:hidden">
              <summary className="cursor-pointer list-none font-heading text-sm font-medium text-lake">
                Menu
              </summary>
              <ul className="absolute left-0 right-0 z-10 mt-2 flex flex-col gap-1 border-b border-lake/10 bg-sand-light px-6 py-4">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 font-heading text-sm font-medium text-lake"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        </div>
      </Container>
    </header>
  );
}
