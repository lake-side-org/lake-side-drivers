import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The elected office bearers who govern Lakeside Drivers Development Self Help Group.",
};

const officeBearers = [
  {
    role: "Chairperson",
    summary:
      "Leads meetings, represents the group externally, and is one of three bank signatories.",
  },
  {
    role: "Vice chairperson",
    summary:
      "Steps in for the chairperson when needed, and chairs the disciplinary committee.",
  },
  {
    role: "Secretary",
    summary:
      "Keeps meeting minutes, handles correspondence, and is custodian of the group's legal documents.",
  },
  {
    role: "Assistant secretary",
    summary: "Supports and deputises for the secretary.",
  },
  {
    role: "Treasurer",
    summary:
      "Manages group funds, keeps financial records, and reports to members every year.",
  },
  {
    role: "Trustee",
    summary: "Safeguards the group's longer-term interests and assets.",
  },
  {
    role: "Organizing secretary",
    summary: "Coordinates logistics for meetings and group activities.",
  },
];

export default function LeadershipPage() {
  return (
    <Container>
      <div className="py-16">
        <SectionHeading
          eyebrow="Leadership"
          title="Elected by members, accountable to members"
          intro="Office bearers are elected annually at our AGM and serve up to two terms. Names and photos of our current leadership are being added as we finish preparing this page."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {officeBearers.map((bearer) => (
            <div
              key={bearer.role}
              className="rounded-card border border-lake/10 bg-white p-5"
            >
              <div
                aria-hidden="true"
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sand font-heading text-sm font-medium text-lake"
              >
                {bearer.role
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <p className="font-heading text-sm font-medium text-lake">
                {bearer.role}
              </p>
              <p className="mt-1 text-sm text-lake-dark/80">
                {bearer.summary}
              </p>
              <p className="mt-3 text-xs italic text-lake-dark/50">
                Name and photo coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
