import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "How to join Lakeside Drivers Development Self Help Group: fees, contributions, and what's expected of members.",
};

const fees = [
  { label: "Registration fee (one-time, non-refundable)", amount: "Ksh 1,000" },
  { label: "Weekly table banking contribution", amount: "Ksh 100–1,000" },
  { label: "Merry-go-round contribution", amount: "Ksh 1,000" },
];

const steps = [
  {
    title: "Come to a meeting",
    body: "Attend one of our fortnightly Sunday meetings and let the group know you're interested in joining.",
  },
  {
    title: "Hear the terms",
    body: "The group secretary will read out the conditions of membership so you know exactly what you're agreeing to.",
  },
  {
    title: "Register",
    body: "If you agree to the terms, your details go into the membership register and you pay the one-time registration fee.",
  },
  {
    title: "Start contributing",
    body: "From there, you join the weekly table banking and merry-go-round contributions like every other member.",
  },
];

export default function MembershipPage() {
  return (
    <Container>
      <div className="py-16">
        <SectionHeading
          eyebrow="Membership"
          title="Open to any driver aged 18 and older"
          intro="Joining is straightforward, but it is a commitment — members are expected to attend meetings and keep up with contributions."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg font-medium text-lake">
              What it costs
            </h3>
            <div className="mt-4 overflow-hidden rounded-card border border-lake/10">
              <table className="w-full text-sm">
                <tbody>
                  {fees.map((fee, index) => (
                    <tr
                      key={fee.label}
                      className={index % 2 === 0 ? "bg-white" : "bg-sand/50"}
                    >
                      <td className="px-4 py-3 text-lake-dark/80">
                        {fee.label}
                      </td>
                      <td className="px-4 py-3 text-right font-heading font-medium text-lake">
                        {fee.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-lake-dark/60">
              Membership can end if a member misses three consecutive
              meetings without notice, or falls behind on weekly
              contributions for four straight weeks. Full terms are in the
              group&apos;s constitution, available to members on request.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium text-lake">
              How to join
            </h3>
            <ol className="mt-4 space-y-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-lake font-heading text-sm font-medium text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-medium text-lake">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm text-lake-dark/80">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 rounded-card bg-lake px-6 py-8 text-center text-white">
          <p className="font-heading text-lg font-medium">
            Have questions before you join?
          </p>
          <p className="mt-2 text-sm text-sand-light/90">
            Reach out and a member of our leadership will get back to you.
          </p>
          <div className="mt-5">
            <LinkButton href="/contact">Contact us</LinkButton>
          </div>
        </div>
      </div>
    </Container>
  );
}
