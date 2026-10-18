export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      role="img"
      aria-label="Lakeside Drivers Development Self Help Group logo"
    >
      <path
        d="M10 22 Q50 2 90 22 L90 55 Q90 90 50 108 Q10 90 10 55 Z"
        fill="#163A5C"
      />
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="34"
        fontWeight="500"
        fontFamily="system-ui, sans-serif"
      >
        LD
      </text>
      <rect x="27" y="72" width="46" height="7" rx="2" fill="#E0942B" />
    </svg>
  );
}
