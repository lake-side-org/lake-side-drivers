import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with Lakeside Drivers Development Self Help Group in Kakola, Ahero.",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="py-16">
        <SectionHeading
          eyebrow="Contact us"
          title="We'd like to hear from you"
          intro="Whether you're interested in joining, want to partner with us, or just have a question — send us a message."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-card border border-lake/10 bg-sand p-6">
              <h3 className="font-heading text-sm font-medium uppercase tracking-wide text-lake">
                Other ways to reach us
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-lake-dark">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-lake underline"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-lake-dark">Postal address</dt>
                  <dd className="text-lake-dark/80">
                    {siteConfig.location.postal}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-lake-dark">Find us</dt>
                  <dd className="text-lake-dark/80">
                    {siteConfig.location.landmark},{" "}
                    {siteConfig.location.subLocation}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
