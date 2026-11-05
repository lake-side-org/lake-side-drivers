import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "How table banking, the merry-go-round, and group meetings work at Lakeside Drivers Development Self Help Group.",
};

export default function HowWeWorkPage() {
  return (
    <Container>
      <div className="py-16">
        <SectionHeading
          eyebrow="How we work"
          title="No complicated systems — just consistency"
          intro="Everything we do runs on two savings habits and a simple meeting rhythm. Here's exactly how each one works."
        />

        <div className="mt-10 space-y-10">
          <div>
            <h3 className="font-heading text-lg font-medium text-lake">
              Table banking
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-lake-dark/80">
              Each member contributes a weekly amount of their choosing,
              between 100 and 1,000 shillings. That money is pooled and kept
              as group savings, managed by the treasurer and recorded openly.
              Members can access it for loans or emergencies under terms the
              group agrees on together — not from an outside lender charging
              whatever they like.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium text-lake">
              Merry-go-round
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-lake-dark/80">
              Alongside table banking, members also contribute a fixed 1,000
              shillings toward the merry-go-round. Each round, the full
              pooled amount goes to a different member in turn, so everyone
              gets their lump sum at some point. It&apos;s a rotating fund, built
              entirely on members trusting each other to keep contributing.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium text-lake">
              How meetings run
            </h3>
            <div className="mt-2 grid gap-4 sm:grid-cols-3">
              <div className="rounded-card border border-lake/10 bg-white p-5">
                <p className="font-heading text-sm font-medium text-lake">
                  Weekly meetings
                </p>
                <p className="mt-1 text-sm text-lake-dark/80">
                  Held every two weeks on Sunday from 2:00 PM, rotating at a
                  member&apos;s house.
                </p>
              </div>
              <div className="rounded-card border border-lake/10 bg-white p-5">
                <p className="font-heading text-sm font-medium text-lake">
                  Special meetings
                </p>
                <p className="mt-1 text-sm text-lake-dark/80">
                  Called whenever an urgent matter needs the group&apos;s input,
                  with notice given as soon as possible.
                </p>
              </div>
              <div className="rounded-card border border-lake/10 bg-white p-5">
                <p className="font-heading text-sm font-medium text-lake">
                  Annual general meeting
                </p>
                <p className="mt-1 text-sm text-lake-dark/80">
                  Held every December 20th, where the treasurer presents a
                  full financial report to all members.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-card bg-sand p-6">
            <h3 className="font-heading text-lg font-medium text-lake">
              What keeps this fair
            </h3>
            <p className="mt-2 text-sm text-lake-dark/80">
              Three elected officials — the chairperson, secretary, and
              treasurer — are joint signatories on the group&apos;s bank account,
              so no single person controls the funds. Financial records are
              also reviewed by an internal auditor at least twice a year, and
              a full report goes to every member each December.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
