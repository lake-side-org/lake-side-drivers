import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about Lakeside Drivers Development Self Help Group's mission, vision, and values as a registered group in Kakola, Ahero.",
};

const objectives = [
  "Support legal income-generating activities among members, including farming and business.",
  "Address transport-sector welfare, safety, and the challenges drivers face day to day.",
  "Encourage tree planting and other simple environmental action in our community.",
  "Stand with members through hardship, and stay strictly non-political.",
  "Build peace, love, and unity among members and the wider community.",
];

const values = ["Integrity", "Honesty", "Goal-oriented", "Transparency", "Decency"];

export default function AboutPage() {
  return (
    <Container>
      <div className="py-16">
        <SectionHeading
          eyebrow="About us"
          title="A group built on trust, one contribution at a time"
        />

        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg font-medium text-lake">
              Our vision
            </h3>
            <p className="mt-2 text-sm text-lake-dark/80">
              An empowered member who is independent and developed.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-medium text-lake">
              Our mission
            </h3>
            <p className="mt-2 text-sm text-lake-dark/80">
              Healthy, well-informed members — spiritually, emotionally,
              physically, and financially able to support themselves, their
              families, and their community. We exist to help members build
              real financial security, together.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-lg font-medium text-lake">
            What we're working toward
          </h3>
          <ul className="mt-4 space-y-3">
            {objectives.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-lake-dark/80">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-lg font-medium text-lake">
            The values we hold each other to
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-amber-dark/40 bg-amber/10 px-4 py-2 text-sm font-medium text-amber-dark"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-card border border-lake/10 bg-sand p-6">
          <h3 className="font-heading text-lg font-medium text-lake">
            Where we're based
          </h3>
          <p className="mt-2 text-sm text-lake-dark/80">
            We're registered and based in Kakola, within Ahero, Kisumu
            County — near St. Ann's Primary School. Our members are drivers
            from the surrounding community: boda boda riders, matatu
            operators, and others who work on the road.
          </p>
        </div>
      </div>
    </Container>
  );
}
