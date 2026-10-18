export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 font-heading text-sm font-medium uppercase tracking-wide text-amber-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-2xl font-medium text-lake sm:text-3xl">
        {title}
      </h2>
      {intro ? <p className="mt-3 text-base text-lake-dark/80">{intro}</p> : null}
    </div>
  );
}
