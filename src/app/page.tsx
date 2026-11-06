import type { Metadata } from "next";
import Container from "@/components/Container";
import { LinkButton } from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Lakeside Drivers Development Self Help Group is a registered group of drivers in Kakola, Ahero, saving together through table banking and a merry-go-round.",
};

export default function HomePage() {
  return (
    <>
      <section className="bg-lake text-white">
        <Container>
          <div className="py-16 sm:py-24">
            <p className="font-heading text-sm font-medium uppercase tracking-wide text-amber-light">
              Kakola, Ahero · Kisumu County
            </p>
            <h1 className="mt-3 max-w-2xl font-heading text-3xl font-medium leading-tight sm:text-4xl">
              Drivers in Ahero, saving together and building forward
            </h1>
            <p className="mt-5 max-w-xl text-base text-sand-light/90 sm:text-lg">
              Lakeside Drivers Development Self Help Group brings together
              boda boda riders, matatu operators, and other drivers around
              one goal: put a little aside every week, look out for each
              other, and grow something lasting for our families.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/membership">Join the group</LinkButton>
              <LinkButton href="/about" variant="secondary">
                Learn who we are
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Two simple habits, one shared goal"
            intro="We're a young group — registered, organised, and still growing. Right now, everything we do centres on two things."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-card border border-lake/10 bg-white p-6">
              <h3 className="font-heading text-lg font-medium text-lake">
                Table banking
              </h3>
              <p className="mt-2 text-sm text-lake-dark/80">
                Members contribute weekly, from as little as 100 shillings.
                Those savings stay within the group and give members a way
                to borrow, invest, or handle emergencies without going to a
                shark for a loan.
              </p>
            </div>
            <div className="rounded-card border border-lake/10 bg-white p-6">
              <h3 className="font-heading text-lg font-medium text-lake">
                Merry-go-round
              </h3>
              <p className="mt-2 text-sm text-lake-dark/80">
                Every member puts in a set amount, and it rotates to a
                different member each round. It&apos;s an old idea that still
                works: a lump sum when you need it, funded by people who
                trust you.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-sm text-lake-dark/70">
            We&apos;re not running big projects yet — we&apos;re building the
            foundation first. As the group grows, we plan to expand into
            broader income-generating activities and road safety work for
            our members.
          </p>
        </Container>
      </section>

      <section className="bg-sand py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-heading text-3xl font-medium text-lake">
                25–30
              </p>
              <p className="mt-1 text-sm text-lake-dark/80">
                registered members and growing
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-medium text-lake">
                2
              </p>
              <p className="mt-1 text-sm text-lake-dark/80">
                core activities: table banking and merry-go-round
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-medium text-lake">
                7
              </p>
              <p className="mt-1 text-sm text-lake-dark/80">
                elected office bearers governing the group
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-card bg-lake px-6 py-10 text-center text-white sm:px-12">
            <h2 className="font-heading text-2xl font-medium">
              Want to save with people who have your back?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-sand-light/90">
              Membership is open to anyone 18 or older. It starts with a
              one-time registration fee and a weekly contribution you set
              yourself.
            </p>
            <div className="mt-6">
              <LinkButton href="/membership">See how to join</LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
