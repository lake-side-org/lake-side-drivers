export const siteConfig = {
  name: "Lakeside Drivers Development Self Help Group",
  shortName: "Lakeside Drivers Development",
  tagline: "Drivers in Ahero, saving together and building forward.",
  description:
    "A registered self help group for drivers in Kakola, Ahero, Kisumu County, built around table banking, a merry-go-round savings circle, and honest support between members.",
  url: "https://www.lakesidedrivers.example", // TODO: replace with the real domain once purchased
  email: "lakeside@gmail.com",
  location: {
    village: "Kakola",
    subLocation: "Kakola, Ahero",
    landmark: "Near St. Ann's Primary School",
    postal: "P.O. Box 41, Ahero",
    county: "Kisumu County",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/how-we-work", label: "How we work" },
    { href: "/membership", label: "Membership" },
    { href: "/leadership", label: "Leadership" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
