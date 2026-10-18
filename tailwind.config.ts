import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — see branding notes in README.md
        lake: {
          DEFAULT: "#163A5C", // primary — headers, nav, main text accents
          light: "#2E5478",
          dark: "#0E263D",
        },
        amber: {
          DEFAULT: "#E0942B", // secondary — buttons, calls to action
          light: "#F0B562",
          dark: "#B3730F",
        },
        sky: {
          DEFAULT: "#4A90C4", // supporting tone — dividers, secondary backgrounds
        },
        sand: {
          DEFAULT: "#D8C9AE", // neutral background tone
          light: "#F4EFE4",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
